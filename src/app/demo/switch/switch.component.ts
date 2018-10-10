/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-switch',
  templateUrl: './switch.component.html'
})
export class SwitchComponent {
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
