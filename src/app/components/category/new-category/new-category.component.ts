import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryDataService } from '../../../services/category-data.service';
import { ToasterService } from '../../../services/toaster.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Category } from '../../../models/category';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent {

  public category = new Category();
  public categoryForm: FormGroup;
  public isCreating: boolean;
  public buttonLabel: string;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private categoryService: CategoryDataService,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.category = data;
    this.isCreating = data.id ? false : true;
    this.buttonLabel = this.isCreating ? 'Criar Categoria' : 'Editar Categoria';

    this.categoryForm = new FormGroup({
      id: new FormControl(this.category.id || ''),
      name: new FormControl(this.category.name || '', [Validators.required]),
      observe: new FormControl(this.category.observe || '')
    });
  }

  addNew() {
    this.categoryService.addNew(this.categoryForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.toasterService.success('Sucesso', `Categoria ${data.name} adicionada com Sucesso`);
          this.dialogRef.close(data);
        }
      );
  }

  update() {
    this.categoryService.edit(this.categoryForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.toasterService.success('Sucesso', `Categoria ${data.name} adicionada com Sucesso`);
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
  }

}
