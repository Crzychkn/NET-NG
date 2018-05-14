import { Injectable } from '@angular/core';
import { Item } from './Item';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

@Injectable({
  providedIn: 'root'
})
export class ItemService {

   
   //Get items
   getItems(): Observable<Item[]> {
      return this.http.get<Item[]>(this.itemsUrl)
         .pipe(catchError(this.handleError('getItems', [])));
   }

   //Get items by ID
   getItem(id: number): Observable<Item> {
      const url = `${this.itemsUrl}/${id}`;
      return this.http.get<Item>(url).pipe(
         tap(_ => this.log(`fetched item id=${id}`)),
         catchError(this.handleError<Item>(`getItem id=${id}`))
      );
   }

   //Update item details
   updateItem (item: Item): Observable<any> {
      const url = `${this.itemsUrl}/${item.id}`;
      return this.http.put(url, item, httpOptions).pipe(
         tap(_ => this.log(`updated item id=${item.id}`)),
         catchError(this.handleError<any>('updateItem'))
      );
   }

   //Post/Add new item to list
   addItem (item: Item): Observable<Item> {
      return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
         tap((item: Item) => this.log(`added item w/ id=${item.id}`)),
         catchError(this.handleError<Item>('addItem'))
      );
   }

   //Delete item from list
   deleteItem (item: Item | number): Observable<Item> {
      const id = typeof item === 'number' ? item : item.id;
      const url = `${this.itemsUrl}/${id}`;

      return this.http.delete<Item>(url, httpOptions).pipe(
         tap(_ => this.log(`deleted item id=${id}`)),
         catchError(this.handleError<Item>('deleteItem'))
      );
   }

   private log(message: string) {
      this.messageService.add('ItemService: ' + message);
   }

   /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
   private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

         // TODO: send the error to remote logging infrastructure
         console.error(error); // log to console instead

         // TODO: better job of transforming error for user consumption
         this.log(`${operation} failed: ${error.message}`);

         // Let the app keep running by returning an empty result.
         return of(result as T);
      };
   }

   private itemsUrl = 'http://localhost:5000/api/todo';

   constructor(
      private http: HttpClient,
      private messageService: MessageService) { }
}
