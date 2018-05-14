import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ItemService } from '../item.service';

@Component({
   selector: 'app-item',
   templateUrl: './item.component.html',
   styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

   items: Item[];

   constructor(private itemService: ItemService) { }

   ngOnInit() {
      this.getItems();
   }

   getItems(): void {
      this.itemService.getItems()
          .subscribe(items => this.items = items);
   }

   add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.itemService.addItem({ name } as Item)
      .subscribe(item => {
         this.items.push(item);
      });
   }

   delete(item: Item): void {
      this.items = this.items.filter(i => i !== item);
      this.itemService.deleteItem(item).subscribe();
   }
}
