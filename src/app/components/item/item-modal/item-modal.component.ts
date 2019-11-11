import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Item } from '../../../models/item';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemDataService } from '../../../services/item-data.service';
import { ToasterService } from '../../../services/toaster.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.css']
})
export class ItemModalComponent implements OnInit {

  public item = new Item();
  public itemForm: FormGroup;
  public categoryId: number;
  public listId: number;
  constructor(
    public dialogRef: MatDialogRef<any>,
    private itemService: ItemDataService,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.item = data.item;
    this.categoryId = data.categoryId;
    this.listId = data.listId;
    this.itemForm = new FormGroup({
      name: new FormControl(this.item.name || '', [Validators.required]),
      title: new FormControl(this.item.title || '', [Validators.required]),
      done: new FormControl(this.item.done || false, [Validators.required])
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.itemService.addNew(this.categoryId, this.listId, this.itemForm.value)
      .subscribe(
        (data) => {
          this.toasterService.success('Sucesso', `Categoria ${data.title} adicionada com Sucesso`);
          this.dialogRef.close(data);
        }
      );
  }

}
