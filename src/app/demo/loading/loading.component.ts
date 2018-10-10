/**
 * Created by liuxuwen on 18-5-28.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent {
  tabItems1 : any[] = [];
  currentTab1 : string;
  tabItems2 : any[] = [];
  currentTab2 : string;

  constructor() {
    this.tabItems1 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab1= this.tabItems1[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab2= this.tabItems2[0].label
  }
}
