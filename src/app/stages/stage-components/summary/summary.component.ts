import {Component, EventEmitter} from '@angular/core';
import {StageInterface} from '../../stage/stage.interface';
import DefinitionFormInterface from '../definition/definition-form.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements StageInterface {
  childEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  data: any;
  requiredValues: string[] = [
    'marketingName', 'category', 'type', 'startDate'
  ];
  showError: boolean;

  constructor(private router: Router) {
    this.showError = false;
  }
  savePromotion(): void{
    const storedObject: DefinitionFormInterface = JSON.parse(localStorage.getItem('definitionForm') || '{}');
    const promotionList: DefinitionFormInterface[] = JSON.parse(localStorage.getItem('promotionList') || '[]');
    if (storedObject.id){
      promotionList.splice(promotionList.findIndex(el => el.id === storedObject.id), 1, storedObject);
    }else{
      storedObject.id = this.generateId();
      promotionList.push(storedObject);
    }
    localStorage.setItem('promotionList', JSON.stringify(promotionList));
    localStorage.setItem('definitionForm', '{}');
    this.router.navigate(['promotion-list']);
  }
  saveButtonHandler(): void {
    const storedObject: DefinitionFormInterface | string = JSON.parse(localStorage.getItem('definitionForm') || '{}');
    if (Object.entries(storedObject).length === 0) {
      this.showError = true;
      return;
    }
    Object.entries(storedObject).map((prop) => {
      if (this.requiredValues.includes(prop[0])){
        if (!prop[1]) {
          this.showError = true;
        }
      }
    });
    if (!this.showError){ this.savePromotion(); }
  }
  generateId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
