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
    {label: '何炅', checked: true},
    {label: '黄磊', checked: false},
    {label: '大华', checked: false}
  ];
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
