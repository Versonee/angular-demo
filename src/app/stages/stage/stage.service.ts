import { Injectable } from '@angular/core';

import { StageItem } from './stage-item';
import {DefinitionComponent} from '../stage-components/definition/definition.component';
import {ChooseProductsComponent} from '../stage-components/choose-products/choose-products.component';
import {ExcludeProductsComponent} from '../stage-components/exclude-products/exclude-products.component';
import {BonusProductsComponent} from '../stage-components/bonus-products/bonus-products.component';
import {ProductsLimitComponent} from '../stage-components/products-limit/products-limit.component';
import {ChooseClientsComponent} from '../stage-components/choose-clients/choose-clients.component';
import {ExcludeClientsComponent} from '../stage-components/exclude-clients/exclude-clients.component';
import {ClientsLimitComponent} from '../stage-components/clients-limit/clients-limit.component';
import {SummaryComponent} from '../stage-components/summary/summary.component';

@Injectable()
export class StageService {
  getStages(): StageItem[] {
    return [
      new StageItem(DefinitionComponent, {name: 'Definition'}),
      new StageItem(ChooseProductsComponent, {name: 'Choose products'}),
      new StageItem(ExcludeProductsComponent, {name: 'Exclude products'}),
      new StageItem(BonusProductsComponent, {name: 'Bonus products'}),
      new StageItem(ProductsLimitComponent, {name: 'Products limit'}),
      new StageItem(ChooseClientsComponent, {name: 'Choose clients'}),
      new StageItem(ExcludeClientsComponent, {name: 'Exclude clients'}),
      new StageItem(ClientsLimitComponent, {name: 'Clients limit'}),
      new StageItem(SummaryComponent, {name: 'Summary'}),

    ];
  }
}
