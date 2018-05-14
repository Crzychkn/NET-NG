import { Injectable } from '@angular/core';
import { Item } from './Item';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

   getItems(): Observable<Item[]> {
      this.messageService.add('ItemService: Fetched To Do List');
      return of(ITEMS);
   }

	getItem(id: number): Observable<Item> {
		this.messageService.add(`ItemService: Fetched Item id=${id}`);
		return of(ITEMS.find(item => item.id === id));
	}

   private log(message: string) {
      this.messageService.add('ItemService: ' + message);
   }

   private itemsUrl = 'api/items';

   constructor(
      private http: HttpClient,
      private messageService: MessageService) { }
}
