/**
 * Created by liuxuwen on 18-6-4.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-progress',
  templateUrl: './progress.component.html',
  styles: ['.precDemo {margin: 10px;}', '.precItem {padding: 10px 0;border-bottom: dashed 1px #ccc;}',
    '.precDemo h5 {color: #1a8cff;margin: 0;}']
})
export class ProgressComponent implements OnInit {
  tabItems : any[] = [];
  currentTab : string;
  curValue : number = 30;
  curValue2 : number = 50;
  curValue3 : number = 50;
  total : number = 100;
  tabItems2 : any[] = [];
  currentTab2 : string;
  tabItems3 : any[] = [];
  currentTab3 : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab2 = this.tabItems2[0].label;
    this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab3 = this.tabItems3[0].label;
  }

  ngOnInit() {
  }

  decValue() {
    if (this.curValue < 15) {
      this.curValue = 0;
    } else {
      this.curValue -= 15;
    }
  }

  addValue() {
    if ((this.curValue + 15) > 100) {
      this.curValue = 100;
    } else {
      this.curValue += 15;
    }
  }
}
