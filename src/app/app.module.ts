import { AppRouting } from './app-routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './components/list/todo-list/todo-list.component';

// Material imports
import {
  MatListModule,
  MatDialogModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,
  MatTableModule,
  MatCheckboxModule
} from '@angular/material';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NewCategoryComponent } from './components/category/new-category/new-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { TodoListModalComponent } from './components/list/todo-list-modal/todo-list-modal.component';
import { ItemComponent } from './components/item/item/item.component';
import { ItemModalComponent } from './components/item/item-modal/item-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    CategoryListComponent,
    NewCategoryComponent,
    TodoListComponent,
    TodoListModalComponent,
    ItemComponent,
    ItemModalComponent
  ],
  entryComponents: [
    NewCategoryComponent,
    TodoListModalComponent,
    ItemModalComponent
  ],
  imports: [
    AppRouting,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatToolbarModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
