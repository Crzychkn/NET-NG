import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },	
   { path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: ItemDetailComponent },
   { path: 'item', component: ItemComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
