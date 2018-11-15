/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-rate',
  templateUrl: './rate.component.html'
})
export class RateComponent {
  tabItems : any[] = [];
  currentTab : string;
  curRate : number = 3;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
