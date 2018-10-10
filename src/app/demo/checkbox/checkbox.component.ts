/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
  items : any[] = [
    {label: '何炅', checked: 1, Disable: true},
    {label: '黄磊', checked: 0, Disable: true},
    {label: '大华', checked: 0, Disable: false},
    {label: '大彭', checked: 2, Disable: true},
    {label: 'H', checked: 0, Disable: false},
  ];
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
