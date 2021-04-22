import {Component, EventEmitter, OnInit} from '@angular/core';
import {StageInterface} from '../../stage/stage.interface';

@Component({
  selector: 'app-clients-limit',
  templateUrl: './clients-limit.component.html',
  styleUrls: ['./clients-limit.component.scss']
})
export class ClientsLimitComponent implements StageInterface {
  childEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  data: any;
  constructor() { }
}
