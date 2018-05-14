import { Injectable } from '@angular/core';
import { Item } from './Item';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

   getItems(): Observable<Item[]> {
      this.messageService.add('ItemService: Fetched To Do List');
      return this.http.get<Item[]>(this.itemsUrl);
   }

	getItem(id: number): Observable<Item> {
		this.messageService.add(`ItemService: Fetched Item id=${id}`);
		return of(ITEMS.find(item => item.id === id));
	}

   private log(message: string) {
      this.messageService.add('ItemService: ' + message);
   }

   private itemsUrl = 'http://localhost:5000/api/todo';

   constructor(
      private http: HttpClient,
      private messageService: MessageService) { }
}
