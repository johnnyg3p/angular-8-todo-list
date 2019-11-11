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
    private itemService: ItemDataService,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.item = data.item;
    this.categoryId = data.categoryId;
    this.listId = data.listId;
    this.itemForm = new FormGroup({
      title: new FormControl(this.item.title || '', [Validators.required]),
      complete: new FormControl(this.item.complete || false, [Validators.required])
    });
  }

  ngOnInit() {

  }

  onSubmit() {
    this.itemService.addNew(this.categoryId, this.listId, this.itemForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.toasterService.success('Sucesso', `Categoria ${data.title} adicionada com Sucesso`);
        }
      );
  }

}
