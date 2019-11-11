import { CategoryDataService } from '../../../services/category-data.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Category } from 'src/app/models/category';
import { MatDialog } from '@angular/material/dialog';
import { NewCategoryComponent } from '../new-category/new-category.component';
import { ToasterService } from '../../../services/toaster.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categoryList: Category[];

  displayedColumns: string[] = ['id', 'name', 'observe', 'actions'];
  dataSource = new MatTableDataSource(this.categoryList);


  constructor(
    public categoryService: CategoryDataService,
    public dialog: MatDialog,
    public router: Router,
    private toasterService: ToasterService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAll() {
    this.categoryService.getAll().subscribe(
      (data) => {
        this.categoryList = data as Category[];
        this.dataSource = new MatTableDataSource(this.categoryList);
      }
    );
  }

  addNewCategory() {
    this.openDialogEvent(new Category());
  }

  editCategory(category: Category) {
    this.openDialogEvent(category);
  }

  selectCategory(category: Category) {
    console.log(this.router);
    this.router.navigateByUrl(`/${category.id}/list`);
  }

  deleteCategory(id: number) {
    this.categoryService.remove(id).subscribe(
      (data) => {
        this.getAll();
        this.toasterService.success('Sucesso', `Categoria ${data.name} deletada com Sucesso`);
      }
    );
  }

  openDialogEvent(category?: Category) {
    this.dialog.open(NewCategoryComponent, { data: category });
  }

}
