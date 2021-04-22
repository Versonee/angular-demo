import {Component, EventEmitter, OnInit} from '@angular/core';
import {StageInterface} from '../../stage/stage.interface';

@Component({
  selector: 'app-choose-products',
  templateUrl: './choose-products.component.html',
  styleUrls: ['./choose-products.component.scss']
})
export class ChooseProductsComponent implements StageInterface {
  childEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  data: any;
  constructor() { }
}
