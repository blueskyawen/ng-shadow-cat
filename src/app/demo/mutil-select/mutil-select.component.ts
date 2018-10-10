/**
 * Created by liuxuwen on 18-6-12.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-mutil-select',
  templateUrl: './mutil-select.component.html'
})
export class MutilSelectComponent {
  options : any[] = [{label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
    value: 'paletxui',disable: false},
    {label: 'Iaas',value: 'iaas',disable: false},
    {label: 'Paas',value: 'paas',disable: false},{label: 'Saas',value: 'saas',disable: false},
    {label: 'NG-ANT',value: 'ng-ant',disable: false}];
  selectedOptions = [{label: 'Paas',value: 'paas'},{label: 'Saas',value: 'saas'}];
  options2 : any[] = [{label: 'paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI-paletxUI',
    value: 'paletxui',disable: true},
    {label: 'Iaas',value: 'iaas',disable: false},
    {label: 'Paas',value: 'paas',disable: true},{label: 'Saas',value: 'saas',disable: false},
    {label: 'NG-ANT',value: 'ng-ant',disable: false}];
  selectedOptions2 = [{label: 'Paas',value: 'paas'},{label: 'Saas',value: 'saas'}];
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
