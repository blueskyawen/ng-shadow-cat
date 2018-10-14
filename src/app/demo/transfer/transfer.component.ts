/**
 * Created by liuxuwen on 18-6-19.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-transfer',
  templateUrl: './transfer.component.html'
})
export class TransferComponent {
  sourceOptions : any[] = [{label:'content01',value:'content01',disable:false},
    {label:'content02',value:'content02',disable:false},
    {label:'content03',value:'content03',disable:false},
    {label:'content04',value:'content04',disable:false},
    {label:'content05',value:'content05',disable:false},
    {label:'content06',value:'content06',disable:false},
    {label:'content07',value:'content07',disable:false},
    {label:'content08',value:'content08',disable:false},
    {label:'content01',value:'content01',disable:false}];
  targetOptions : any[] = [{label:'content09',value:'content09',disable:false},
    {label:'content10',value:'content10',disable:false}];
  sourceOptions2 : any[] = [{label:'content01',value:'content01',disable:false},
    {label:'content02',value:'content02',disable:false},
    {label:'content03',value:'content03',disable:true},
    {label:'content04',value:'content04',disable:false},
    {label:'content05',value:'content05',disable:true},
    {label:'content06',value:'content06',disable:false},
    {label:'content07',value:'content07',disable:false},
    {label:'content08',value:'content08',disable:false},
    {label:'content01',value:'content01',disable:false}];
  targetOptions2 : any[] = [{label:'content09',value:'content09',disable:false},
    {label:'content10',value:'content10',disable:false}];
  tabItems : any[] = [];
  currentTab : string;
  tabItems1 : any[] = [];
  currentTab1 : string;
  tabItems2 : any[] = [];
  currentTab2 : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
    this.tabItems1 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab1= this.tabItems1[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab2= this.tabItems2[0].label;
  }
}
