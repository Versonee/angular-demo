import {Component, EventEmitter, OnInit} from '@angular/core';
import {StageInterface} from '../../stage/stage.interface';

@Component({
  selector: 'app-exclude-products',
  templateUrl: './exclude-products.component.html',
  styleUrls: ['./exclude-products.component.scss']
})
export class ExcludeProductsComponent implements StageInterface {
  childEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  data: any;
  constructor() { }
}
