import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnChanges, Output, EventEmitter} from '@angular/core';

import { StageDirective } from './stage.directive';
import { StageItem } from './stage-item';
import { StageInterface } from './stage.interface';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit, OnChanges {
  @Input() stages: StageItem[];
  @Input() currentStageIndex: number;
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(StageDirective, {static: true}) stageHost: StageDirective;
  passToParent: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    this.stages = [];
    this.currentStageIndex = 0;
  }

  ngOnInit(): void {
    this.loadComponent();
  }
  ngOnChanges(): void {
    this.loadComponent();
  }
  loadComponent(): void {
    const stageItem = this.stages[this.currentStageIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(stageItem.component);

    const viewContainerRef = this.stageHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<StageInterface>(componentFactory);
    componentRef.instance.data = stageItem.data;
    componentRef.instance.childEventEmitter.subscribe((emitValue: any) => {
      this.eventEmitter.emit(emitValue);
    });
  }

}
