import {Component, EventEmitter, OnInit} from '@angular/core';
import {StageInterface} from '../../stage/stage.interface';

@Component({
  selector: 'app-products-limit',
  templateUrl: './products-limit.component.html',
  styleUrls: ['./products-limit.component.scss']
})
export class ProductsLimitComponent implements StageInterface {
  childEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  data: any;
  constructor() { }
}
