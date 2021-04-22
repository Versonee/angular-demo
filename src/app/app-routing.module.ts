import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PromotionListComponent} from './promotion-list/promotion-list.component';
import {PromotionComponent} from './promotion/promotion.component';

const routes: Routes = [
  {path: '', component: PromotionComponent},
  {path: 'promotion-list', component: PromotionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
