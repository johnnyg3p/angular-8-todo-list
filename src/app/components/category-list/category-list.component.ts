import { CaregoryDataService } from './../../services/caregory-data.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Category } from 'src/app/models/category';

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
    public categoryService: CaregoryDataService
  ) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.categoryList = data as Category[];
        this.dataSource = new MatTableDataSource(this.categoryList);
      }
    );

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteCategory(id: number) {
    this.categoryService.remove(id).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  editCategory(category: Category) {
    console.log(category);
  }


}
