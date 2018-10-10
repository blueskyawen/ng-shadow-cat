/**
 * Created by liuxuwen on 18-6-4.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {
  tabItems : any[] = [];
  currentTab : string;
  curValue : number = 0;
  total : number = 100;
  timelen : number = 10;
  tabItems2 : any[] = [];
  currentTab2 : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab2 = this.tabItems2[0].label;
  }

  ngOnInit() {
    setTimeout(() => {
      this.progressing();
    },1000);
  }

  progressing() {
    let step = this.total / this.timelen;
    if(this.curValue === this.total) {
      this.curValue = 0;
    } else {
      this.curValue += step;
    }
    setTimeout(() => {
      this.progressing();
    },1000);
  }
}
