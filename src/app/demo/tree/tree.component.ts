/**
 * Created by liuxuwen on 18-6-20.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-tree',
  templateUrl: './tree.component.html'
})
export class TreeComponent {
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
