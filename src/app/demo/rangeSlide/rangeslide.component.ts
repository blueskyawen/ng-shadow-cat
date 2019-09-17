/**
 * Created by liuxuwen on 18-6-4.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-rangeslide',
  templateUrl: './rangeslide.component.html',
  styles: ['.slide-demo {margin-top: 15px;border-bottom: dashed 1px #ccc;}', '.slide-demo .aaa {color:#0099ff;}']
})
export class RangeslideComponent {
  tabItems : any[] = [];
  currentTab : string;
  tabItems2 : any[] = [];
  currentTab2 : string;
  curValue1: number = 30;
  curValue2: number = 30;
  curValue3: number = 50;
  curValue4: number = 80;
  curValue5: number = 50;
  curValue6: number = 30;
  curValue7: number = 36;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab2= this.tabItems2[0].label;
  }
}
