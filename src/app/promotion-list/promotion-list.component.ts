import { Component, OnInit } from '@angular/core';
import DefinitionFormInterface from '../stages/stage-components/definition/definition-form.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-promotion-list',
  templateUrl: './promotion-list.component.html',
  styleUrls: ['./promotion-list.component.scss']
})
export class PromotionListComponent implements OnInit {
  promotionList: DefinitionFormInterface[];

  constructor(private router: Router) {
    this.promotionList = [];
  }

  ngOnInit(): void {
    this.promotionList = JSON.parse(localStorage.getItem('promotionList') || '[]');
  }

  editElement(i: number): void {
    const promotionToEdit: any = this.promotionList[i];
    promotionToEdit.edit = true;
    localStorage.setItem('definitionForm', JSON.stringify(promotionToEdit));
    this.router.navigate(['']);
  }
  deleteElement(i: number): void{
    this.promotionList.splice(i, 1);
    localStorage.setItem('promotionList', JSON.stringify(this.promotionList));
  }
}
