/**
 * Created by liuxuwen on 18-6-2.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-help',
  templateUrl: './help.component.html'
})
export class HelpComponent {
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
