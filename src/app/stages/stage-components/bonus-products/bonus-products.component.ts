import {Component, EventEmitter, OnInit} from '@angular/core';
import {StageInterface} from '../../stage/stage.interface';

@Component({
  selector: 'app-bonus-products',
  templateUrl: './bonus-products.component.html',
  styleUrls: ['./bonus-products.component.scss']
})
export class BonusProductsComponent implements StageInterface {
  childEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  data: any;
  constructor() { }
}
