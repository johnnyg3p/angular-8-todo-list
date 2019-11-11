import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  constructor(private http: HttpClient) { }

  getAll(categoryId: number, listId: number): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.endpoint}/categories/${categoryId}/lists/${listId}/items`);
  }

  getById(categoryId: number, listId: number, id: number): Observable<Item> {
    return this.http.get<Item>(`${environment.endpoint}/categories/${categoryId}/lists/${listId}/${listId}/items/${id}`);
  }

  addNew(categoryId: number, listId: number, item: Item): Observable<Item> {
    return this.http.post<Item>(`${environment.endpoint}/categories/${categoryId}/lists/${listId}/items`, item);
  }

  edit(categoryId: number, listId: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${environment.endpoint}/categories/${categoryId}/lists/${listId}/items${item.id}`, item);
  }

  remove(categoryId: number, listId: number, id: number): Observable<Item> {
    return this.http.delete<Item>(`${environment.endpoint}/categories/${categoryId}/lists/${listId}/items/${id}`);
  }
}
