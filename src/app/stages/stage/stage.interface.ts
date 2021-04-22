import {EventEmitter} from '@angular/core';

export interface StageInterface {
  data: any;
  childEventEmitter: EventEmitter<any>;
}
