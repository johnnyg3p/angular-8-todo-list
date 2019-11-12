import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  constructor(private http: HttpClient) { }

  getAll(categoryId: number): Observable<List[]> {
    return this.http.get<List[]>(`${environment.endpoint}/categories/${categoryId}/lists`);
  }

  getById(categoryId: number, id: number): Observable<List> {
    return this.http.get<List>(`${environment.endpoint}/categories/${categoryId}/lists/${id}`);
  }

  addNew(categoryId: number, list: List): Observable<List> {
    return this.http.post<List>(`${environment.endpoint}/categories/${categoryId}/lists`, list);
  }

  edit(categoryId: number, list: List): Observable<List> {
    return this.http.put<List>(`${environment.endpoint}/categories/${categoryId}/lists/${list.id}`, list);
  }

  remove(categoryId: number, id: number): Observable<List> {
    return this.http.delete<List>(`${environment.endpoint}/categories/${categoryId}/lists/${id}`);
  }

}
