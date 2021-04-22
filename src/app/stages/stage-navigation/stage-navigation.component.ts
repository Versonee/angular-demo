import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {NavItem} from '../../nav-item';
import DefinitionFormInterface from '../stage-components/definition/definition-form.interface';


@Component({
  selector: 'app-stage-navigation',
  templateUrl: './stage-navigation.component.html',
  styleUrls: ['./stage-navigation.component.scss']
})
export class StageNavigationComponent implements OnInit {
  @Input('stages') stages: NavItem[];
  @Input('disabledSteps') disabledSteps: number[];
  @Output() selectionEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Input() nameExists: boolean;
  selected: number;
  disabled: number[];
  constructor() {
    this.selected = 0;
    this.stages = [];
    this.disabledSteps = [];
    this.disabled = [];
    this.nameExists = false;
  }
  ngOnInit(): void {
    this.disabled = this.disabledSteps;
  }

  handleClick(index: number): void {
    if (this.nameExists || !this.disabled.includes(index)) {
      this.selected = index;
      this.selectionEmitter.emit(index);
    }
  }
}
