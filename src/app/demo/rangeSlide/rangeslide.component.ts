/**
 * Created by liuxuwen on 18-6-4.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-rangeslide',
  templateUrl: './rangeslide.component.html'
})
export class RangeslideComponent {
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
