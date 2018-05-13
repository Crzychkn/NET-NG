import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ITEMS } from '../mock-items';

@Component({
   selector: 'app-list',
   templateUrl: './list.component.html',
   styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

   items = ITEMS;

   selectedItem: Item;

   constructor() { }

   ngOnInit() {
   }
   
   onSelect(item: Item): void {
      this.selectedItem = item;
   }
}
