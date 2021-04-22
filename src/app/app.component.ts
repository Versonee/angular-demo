import {Component, OnInit} from '@angular/core';
import {NavItem} from './nav-item';
import {StageService} from './stages/stage/stage.service';
import { RouterModule } from '@angular/router';
import {StageItem} from './stages/stage/stage-item';
import DefinitionFormInterface from './stages/stage-components/definition/definition-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'rekrutacja';
  disabledSteps: number[] = [3, 4];
  nameExists: boolean;
  stages: StageItem[] = [];
  currentStage = 0;
  navigationStages: NavItem[] = [
    {itemName: 'definition'},
    {itemName: 'choose products'},
    {itemName: 'exclude products'},
    {itemName: 'bonus products', info: 'Lorem ipsum'},
    {itemName: 'products limit', info: 'Lorem ipsum'},
    {itemName: 'choose clients'},
    {itemName: 'exclude clients'},
    {itemName: 'clients limit'},
    {itemName: 'summary'},
  ];

  constructor(private stageService: StageService) {
    const storedObject: DefinitionFormInterface = JSON.parse(localStorage.getItem('definitionForm') || '{}');
    this.nameExists = !!storedObject.marketingName;
  }

  ngOnInit(): void {
    this.stages = this.stageService.getStages();
  }

  updateStage(value: number): void {
    this.currentStage = value;
  }

  processInformation($event: boolean): void {
    this.nameExists = $event;
  }
}
