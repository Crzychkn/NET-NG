import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemDetailComponent,
    MessagesComponent
  ],
  imports: [
     BrowserModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
