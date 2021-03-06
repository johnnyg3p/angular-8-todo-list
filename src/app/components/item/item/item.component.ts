import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from '../../../services/toaster.service';
import { Item } from '../../../models/item';
import { ItemDataService } from '../../../services/item-data.service';
import { ItemModalComponent } from '../item-modal/item-modal.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public items: Item[];
  public categoryId: any;
  public listId: any;

  displayedColumns: string[] = ['id', 'title', 'name', 'done', 'actions'];
  dataSource = new MatTableDataSource(this.items);


  constructor(
    public itemService: ItemDataService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute,
    private toasterService: ToasterService
  ) {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.listId = this.route.snapshot.paramMap.get('listId');
  }

  ngOnInit() {
    this.getAll();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAll() {
    this.itemService.getAll(this.categoryId, this.listId).subscribe(
      (data) => {
        this.items = data as Item[];
        this.dataSource = new MatTableDataSource(this.items);
      }
    );
  }

  addNewItem() {
    this.openDialogEvent(new Item());
  }

  editItem(item: Item) {
    this.openDialogEvent(item);
  }

  deleteItem(itemId: number) {
    this.itemService.remove(this.categoryId, this.listId, itemId).subscribe(
      (data) => {
        this.getAll();
        this.toasterService.success('Sucesso', `Itema ${data.title} deletada com Sucesso`);
      }
    );
  }

  openDialogEvent(item?: Item) {
    const data = {
      item,
      categoryId: this.categoryId,
      listId: this.listId
    };
    const dialogRef = this.dialog.open(ItemModalComponent, { data });

    dialogRef.afterClosed().subscribe(result => {
      this.getAll();
    });
  }
}
