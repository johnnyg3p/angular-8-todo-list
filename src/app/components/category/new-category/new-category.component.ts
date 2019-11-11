import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryDataService } from '../../../services/category-data.service';
import { ToasterService } from '../../../services/toaster.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  public category = new Category();
  public categoryForm: FormGroup;
  constructor(
    private categoryService: CategoryDataService,
    private toasterService: ToasterService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.category = data;
    this.categoryForm = new FormGroup({
      name: new FormControl(this.category.name || '', [Validators.required]),
      observe: new FormControl(this.category.observe || '')
    });
  }

  ngOnInit() {

  }



  onSubmit() {
    this.categoryService.addNew(this.categoryForm.value)
      .subscribe(
        (data) => {
          console.log(data);
          this.toasterService.success('Sucesso', `Categoria ${data.name} adicionada com Sucesso`);
        }
      );
  }

}
