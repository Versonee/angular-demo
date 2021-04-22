import {Component, EventEmitter, OnInit} from '@angular/core';
import {StageInterface} from '../../stage/stage.interface';

@Component({
  selector: 'app-exclude-clients',
  templateUrl: './exclude-clients.component.html',
  styleUrls: ['./exclude-clients.component.scss']
})
export class ExcludeClientsComponent implements StageInterface {
  childEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  data: any;
  constructor() { }
}
