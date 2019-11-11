import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { List } from '../../../models/list';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ToasterService } from '../../../services/toaster.service';
import { ListDataService } from '../../../services/list-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list-modal',
  templateUrl: './todo-list-modal.component.html',
  styleUrls: ['./todo-list-modal.component.css']
})
export class TodoListModalComponent implements OnInit {

  public list = new List();
  public listForm: FormGroup;
  public categoryId: number;
  constructor(
    private ListService: ListDataService,
    private toasterService: ToasterService,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.list = data.list;
    this.categoryId = data.categoryId;
    this.listForm = new FormGroup({
      name: new FormControl(this.list.name || '', [Validators.required])
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.ListService.addNew(this.categoryId, this.listForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.toasterService.success('Sucesso', `Categoria ${data.name} adicionada com Sucesso`);
        }
      );
  }

}
