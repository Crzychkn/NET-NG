import { Injectable } from '@angular/core';
import { Item } from './Item';
import { ITEMS } from './mock-items';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

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

  constructor(private messageService: MessageService) { }
}
