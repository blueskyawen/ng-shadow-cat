/**
 * Created by liuxuwen on 18-6-11.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-select',
  templateUrl: './select.component.html'
})
export class SelectComponent {
  value: string = 'paletxui';
  options : any[] = [{label: 'paletx-UI',value: 'paletxui',disable: false},
    {label: 'Iaas',value: 'iaas',disable: false},
    {label: 'Paas',value: 'paas',disable: false},{label: 'Saas',value: 'saas',disable: false},
    {label: 'NG-ANT',value: 'ng-ant',disable: false}];
  options2 : any[] = [{label: 'paletx-UI',value: 'paletxui',disable: false},
    {label: 'Iaas',value: 'iaas',disable: true},
    {label: 'Paas',value: 'paas',disable: false},{label: 'Saas',value: 'saas',disable: true},
    {label: 'NG-ANT',value: 'ng-ant',disable: false}];
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
