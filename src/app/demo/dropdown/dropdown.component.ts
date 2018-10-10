/**
 * Created by liuxuwen on 18-8-20.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  options : any[] = [{name:'阿里巴巴',disable:false,callback: () => {console.log('阿里巴巴');}},
    {name:'百度',disable:true},
    {name:'下拉菜单标题',divider:true,
      children:[{name:'小米',disable:false,callback: () => {console.log('小米');}},
        {name:'网易',disable:false,callback: () => {console.log('腾讯');}}]},
    {name:'新浪',disable:false,callback: () => {console.log('网易');}}];
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
