import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../Item';
import { ItemService } from '../item.service';

@Component({
   selector: 'app-item-detail',
   templateUrl: './item-detail.component.html',
   styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

   @Input() item: Item;

   constructor(
      private route: ActivatedRoute,
      private itemService: ItemService,
      private location: Location
   ) { }

   ngOnInit(): void {
      this.getItem();
   }

   //Get items to display
   getItem(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.itemService.getItem(id)
      .subscribe(item => this.item = item);
   }

   //Save details update
   save(): void {
      this.itemService.updateItem(this.item)
      .subscribe(() => this.goBack());
   }

   goBack(): void {
      this.location.back();
   }

}
