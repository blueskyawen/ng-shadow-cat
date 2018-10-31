/**
 * Created by liuxuwen on 18-5-29.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent {
  tabItems1 : any[] = [];
  currentTab1 : string;
  tabItems2 : any[] = [];
  currentTab2 : string;
  tabItems3 : any[] = [];
  currentTab3 : string;
  tabItems4 : any[] = [];
  currentTab4 : string;
  tabItems5 : any[] = [];
  currentTab5 : string;
  tabItems6 : any[] = [];
  currentTab6 : string;
  tabItems7 : any[] = [];
  currentTab7 : string;
  tabItems8 : any[] = [];
  currentTab8 : string;

  constructor() {
    this.tabItems1 = [{name:'苹果',label:'apple',isActive:true,isDisable:false},
      {name:'小米-小米-小米-小米-小米-小米',label:'xiaomi',isActive:false,isDisable:false},
      {name:'欧普',label:'oppo',isActive:false,isDisable:false},
      {name:'维沃',label:'vivo',isActive:false,isDisable:false},
      {name:'中兴',label:'zte',isActive:false,isDisable:false}];
    this.currentTab1 = this.tabItems1[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab2= this.tabItems2[0].label;
    this.tabItems3 = [{name:'苹果',label:'apple',isActive:true,isDisable:false},
      {name:'小米',label:'xiaomi',isActive:false,isDisable:true},
      {name:'欧普',label:'oppo',isActive:false,isDisable:false}];
    this.currentTab3= this.tabItems3[0].label;
    this.tabItems4 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab4= this.tabItems2[0].label;
    this.tabItems5 = [{name:'苹果',label:'apple',isActive:true,isDisable:false},
      {name:'小米',label:'xiaomi',isActive:false,isDisable:true},
      {name:'欧普',label:'oppo',isActive:false,isDisable:false},
      {name:'维沃',label:'vivo',isActive:false,isDisable:false},
      {name:'中兴',label:'zte',isActive:false,isDisable:false}];
    this.currentTab5= this.tabItems5[0].label;
    this.tabItems6 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab6= this.tabItems6[0].label;
    this.tabItems7 = [{name:'苹果',label:'apple',isActive:true,isDisable:false},
      {name:'小米',label:'xiaomi',isActive:false,isDisable:false},
      {name:'欧普',label:'oppo',isActive:false,isDisable:false},
      {name:'维沃',label:'vivo',isActive:false,isDisable:false},
      {name:'中兴',label:'zte',isActive:false,isDisable:false}];
    this.currentTab7= this.tabItems7[0].label;
    this.tabItems8 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab8= this.tabItems8[0].label;
  }

}
