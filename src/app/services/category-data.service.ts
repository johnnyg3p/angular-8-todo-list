import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.endpoint + '/categories');
  }

  getById(id: number): Observable<Category> {
    return this.http.get<Category>(environment.endpoint + '/categories/' + id);
  }

  addNew(category: Category): Observable<Category> {
    return this.http.post<Category>(environment.endpoint + '/categories', category);
  }

  edit(category: Category): Observable<Category> {
    return this.http.put<Category>(environment.endpoint + `/categories/${category.id}`, category);
  }

  remove(id: number): Observable<Category> {
    return this.http.delete<Category>(environment.endpoint + '/categories/' + id);
  }
}



