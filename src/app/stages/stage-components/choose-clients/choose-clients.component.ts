import {Component, EventEmitter, OnInit} from '@angular/core';
import {StageInterface} from '../../stage/stage.interface';

@Component({
  selector: 'app-choose-clients',
  templateUrl: './choose-clients.component.html',
  styleUrls: ['./choose-clients.component.scss']
})
export class ChooseClientsComponent implements StageInterface {
  childEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  data: any;
  constructor() { }
}
