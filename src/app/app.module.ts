import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StageNavigationComponent } from './stages/stage-navigation/stage-navigation.component';
import {StageDirective} from './stages/stage/stage.directive';
import { StageComponent } from './stages/stage/stage.component';
import { DefinitionComponent } from './stages/stage-components/definition/definition.component';
import {StageService} from './stages/stage/stage.service';
import { ChooseProductsComponent } from './stages/stage-components/choose-products/choose-products.component';
import { ExcludeProductsComponent } from './stages/stage-components/exclude-products/exclude-products.component';
import { BonusProductsComponent } from './stages/stage-components/bonus-products/bonus-products.component';
import { ProductsLimitComponent } from './stages/stage-components/products-limit/products-limit.component';
import { ChooseClientsComponent } from './stages/stage-components/choose-clients/choose-clients.component';
import { ExcludeClientsComponent } from './stages/stage-components/exclude-clients/exclude-clients.component';
import { ClientsLimitComponent } from './stages/stage-components/clients-limit/clients-limit.component';
import { SummaryComponent } from './stages/stage-components/summary/summary.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PromotionListComponent } from './promotion-list/promotion-list.component';
import {PromotionComponent} from './promotion/promotion.component';

const modules = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  BrowserAnimationsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    AppComponent,
    StageNavigationComponent,
    StageDirective,
    StageComponent,
    DefinitionComponent,
    ChooseProductsComponent,
    ExcludeProductsComponent,
    BonusProductsComponent,
    ProductsLimitComponent,
    ChooseClientsComponent,
    ExcludeClientsComponent,
    ClientsLimitComponent,
    SummaryComponent,
    PromotionListComponent,
    PromotionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [...modules]
  ],
  exports: [...modules],
  providers: [StageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
