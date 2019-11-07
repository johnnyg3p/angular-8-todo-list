import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



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
        path: 'monte-sua-combinacao',
        loadChildren: () => import('./components/todo-list/todo-list.component').then(m => m.TodoListComponent),
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
