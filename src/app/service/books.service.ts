import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  targetUrl: string = 'http://localhost:8080/api/books';

  constructor(private _http: HttpClient) { }

  addBook(data: any): Observable<any> {
    return this._http.post(this.targetUrl, data);
  }

  getAllBooks(): Observable<any> {
    return this._http.get(this.targetUrl);
  }

  updateBook(id: number, data: any): Observable<any> {
    return this._http.put(`${this.targetUrl}/${id}`, data);
  }

  deleteBook(id: number): Observable<any> {
    return this._http.delete(`${this.targetUrl}/${id}`);
  }

  getBookByTitleOrAuthor(query: string): Observable<any> {
    return this._http.get(`${this.targetUrl}?search=${query}`);
  }

  borrowBook(id: number): Observable<any> {
    return this._http.put(`${this.targetUrl}/${id}/borrow`, null);
  }

  returnBook(id: number): Observable<any> {
    return this._http.put(`${this.targetUrl}/${id}/return`, null);
  }

}
