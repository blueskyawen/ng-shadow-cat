/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent {
  tabItems1 : any[] = [];
  currentTab1 : string;
  tabItems2 : any[] = [];
  currentTab2 : string;
  tabItems3 : any[] = [];
  currentTab3 : string;
  panelItems : any[] = [
    {label:'杨过',active:false},
    {label:'小龙女',active:false},
    {label:'黄药师',active:false}
  ];

  constructor() {
    this.tabItems1 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab1= this.tabItems1[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab2= this.tabItems2[0].label;
    this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab3= this.tabItems3[0].label;
  }

  handleChange(index : number) {
    for(let i=0;i < this.panelItems.length;i++) {
      if(i !== index) {
        this.panelItems[i].active = false;
      }
    }
  }
}
