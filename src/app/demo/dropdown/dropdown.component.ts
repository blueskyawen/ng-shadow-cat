/**
 * Created by liuxuwen on 18-8-20.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  options : any[] = [{name:'阿里巴巴',disable:false,callback: () => {console.log('阿里巴巴');}},
    {name:'百度',disable:false,callback: () => {console.log('百度');}},
    {name:'小米',disable:false,callback: () => {console.log('小米');}},
    {name:'新浪',disable:false,callback: () => {console.log('网易');}}];
  options2 : any[] = [{name:'阿里巴巴',disable:false,callback: () => {console.log('阿里巴巴');}},
    {name:'百度',disable:true},
    {name:'下拉菜单标题',divider:true,
      children:[{name:'小米',disable:false,callback: () => {console.log('小米');}},
        {name:'网易',disable:false,callback: () => {console.log('腾讯');}}]},
    {name:'新浪',disable:false,callback: () => {console.log('网易');}}];
  tabItems : any[] = [];
  currentTab : string;
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
    this.currentTab2= this.tabItems2[0].label;
    this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab3= this.tabItems3[0].label;
  }
}
