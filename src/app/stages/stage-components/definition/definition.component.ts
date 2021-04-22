import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StageInterface} from '../../stage/stage.interface';
import DefinitionFormInterface from './definition-form.interface';
import {MatRadioChange} from '@angular/material/radio';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.scss']
})
export class DefinitionComponent implements StageInterface {
  @Input() data: any;
  childEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  categories: string[] = [
    'category1',
    'category2',
    'category3'
  ];
  types: string[] = [
    'type1',
    'type2',
    'type3'
  ];
  marketingName: string;
  technicalName: string;
  description: string;
  benefitAmount: number | undefined;
  startDate: Date | undefined;
  finishDate: Date | undefined;
  currentDay: Date;
  category: string;
  type: string;
  otherPromotionsCheckbox: boolean;
  backPromotionsCheckbox: boolean;
  radioOption: number | undefined;

  constructor() {
    const storedObject: DefinitionFormInterface = JSON.parse(localStorage.getItem('definitionForm') || '{}');
    this.marketingName = storedObject.marketingName || '';
    this.technicalName = storedObject.technicalName || '';
    this.description = storedObject.description || '';
    this.currentDay = new Date();
    this.benefitAmount = storedObject.benefitAmount || undefined;
    this.category = storedObject.category || '';
    this.type = storedObject.type || '';
    this.startDate = storedObject.startDate || undefined;
    this.finishDate = storedObject.finishDate || undefined;
    this.otherPromotionsCheckbox = storedObject.otherPromotionsCheckbox || false;
    this.backPromotionsCheckbox = storedObject.backPromotionsCheckbox || false;
    this.radioOption = storedObject.radioOption || undefined;
  }


  updateDraft(): void {
    const storedObject: DefinitionFormInterface = JSON.parse(localStorage.getItem('definitionForm') || '{}');
    const id: string | undefined = storedObject.id ? storedObject.id : undefined;
    const definitionFormObject: DefinitionFormInterface = {
      marketingName: this.marketingName,
      technicalName : this.technicalName,
      description : this.description,
      startDate : this.startDate,
      finishDate : this.finishDate,
      category: this.category,
      type: this.type,
      benefitAmount: this.benefitAmount,
      otherPromotionsCheckbox: this.otherPromotionsCheckbox,
      backPromotionsCheckbox: this.backPromotionsCheckbox,
      radioOption: this.radioOption,
      id,
    };
    localStorage.setItem('definitionForm', JSON.stringify(definitionFormObject));
    this.childEventEmitter.emit(this.marketingName !== '');
  }
}
