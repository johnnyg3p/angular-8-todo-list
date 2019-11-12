import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { List } from '../../../models/list';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ToasterService } from '../../../services/toaster.service';
import { ListDataService } from '../../../services/list-data.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list-modal',
  templateUrl: './todo-list-modal.component.html',
  styleUrls: ['./todo-list-modal.component.css']
})
export class TodoListModalComponent {

  public list = new List();
  public listForm: FormGroup;
  public categoryId: number;
  public isCreating: boolean;
  public buttonLabel: string;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private ListService: ListDataService,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.list = data.list;
    this.categoryId = data.categoryId;
    this.isCreating = data.list.id ? false : true;
    this.buttonLabel = this.isCreating ? 'Criar Lista' : 'Editar Lista';
    this.listForm = new FormGroup({
      id: new FormControl(this.list.id || ''),
      itemId: new FormControl(this.list.itemId || ''),
      name: new FormControl(this.list.name || '', [Validators.required])
    });
  }

  addNew() {
    this.ListService.addNew(this.categoryId, this.listForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.toasterService.success('Sucesso', `Lista ${data.name} adicionada com Sucesso`);
          this.dialogRef.close(data);
        }
      );
  }

  update() {
    this.ListService.edit(this.categoryId, this.listForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.toasterService.success('Sucesso', `Lista ${data.name} adicionada com Sucesso`);
          this.dialogRef.close(data);
        }
      );
  }

  onSubmit() {
    if (this.isCreating) {
      this.addNew();
    } else {
      this.update();
    }
  };

}
