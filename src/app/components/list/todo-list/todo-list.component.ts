import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list';
import { MatTableDataSource } from '@angular/material';
import { ListDataService } from '../../../services/list-data.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from '../../../services/toaster.service';
import { TodoListModalComponent } from '../todo-list-modal/todo-list-modal.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public list: List[];
  public categoryId: any;

  displayedColumns: string[] = ['id', 'name', 'observe', 'actions'];
  dataSource = new MatTableDataSource(this.list);


  constructor(
    public listService: ListDataService,
    public dialog: MatDialog,
    public router: Router,
    private route: ActivatedRoute,
    private toasterService: ToasterService
  ) {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
  }

  ngOnInit() {
    this.getAll();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAll() {
    this.listService.getAll(this.categoryId).subscribe(
      (data) => {
        this.list = data as List[];
        this.dataSource = new MatTableDataSource(this.list);
      }
    );
  }

  addNewList() {
    this.openDialogEvent(new List());
  }

  editList(list: List) {
    this.openDialogEvent(list);
  }

  selectList(list: List) {
    this.router.navigateByUrl(`/${this.categoryId}/list/${list.id}/itens`);
  }

  deleteList(listId: number) {
    this.listService.remove(this.categoryId, listId).subscribe(
      (data) => {
        this.getAll();
        this.toasterService.success('Sucesso', `Lista ${data.name} deletada com Sucesso`);
      }
    );
  }

  openDialogEvent(list?: List) {
    const data = {
      list,
      categoryId: this.categoryId
    };

    this.dialog.open(TodoListModalComponent, { data });
  }


}
