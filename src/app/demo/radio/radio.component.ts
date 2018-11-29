/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent {
  items : any[] = [
    {label: '何炅', value: 'hejiong',disabled:false},
    {label: '黄磊', value: 'huanlei',disabled:false},
    {label: '大华', value: 'dahua',disabled:false}
  ];
  items2 : any[] = [
    {label: '何炅', value: 'hejiong',disabled:true},
    {label: '黄磊', value: 'huanlei',disabled:true},
    {label: '大华', value: 'dahua',disabled:false}
  ];
  items3 : any[] = [
    {label: '何炅', value: 'hejiong',disabled:true},
    {label: '黄磊', value: 'huanlei',disabled:false},
    {label: '大华', value: 'dahua',disabled:false}
  ];
  selectItem : any = 'huanlei';
  selectItem2 : any = 'huanlei';
  selectItem3 : any = 'huanlei';
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }

  checkItem(item : any) {
    this.items.forEach((item) => {
      item.checked = false;
    });
    item.checked = true;
  }
}
