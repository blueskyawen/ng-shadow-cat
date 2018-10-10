/**
 * Created by liuxuwen on 18-5-31.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-toTop',
  templateUrl: './toTop.component.html'
})
export class ToTopComponent {
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
