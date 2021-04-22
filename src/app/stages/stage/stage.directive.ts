// tslint:disable: directive-selector
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[stageHost]',
})
export class StageDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
