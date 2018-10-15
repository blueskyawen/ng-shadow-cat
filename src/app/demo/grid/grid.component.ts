/**
 * Created by liuxuwen on 18-8-8.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css','../../lib/nc-shadow-cat.css']
})
export class GridComponent {
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
