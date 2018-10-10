/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
