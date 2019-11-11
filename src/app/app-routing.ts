import { TodoListComponent } from './components/list/todo-list/todo-list.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item/item.component';



const routes: Routes = [
    {
        path: '',
        component: CategoryListComponent,
        data: {
            title: '',
            description: ''
        }
    },
    {
        path: ':categoryId/list',
        component: TodoListComponent,
        data: {
            title: '',
            description: ''
        }
    },
    {
        path: ':categoryId/list/:listId/itens',
        component: ItemComponent,
        data: {
            title: '',
            description: ''
        }
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRouting { }
