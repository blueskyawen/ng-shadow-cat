/**
 * Created by liuxuwen on 18-8-23.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-pager',
  templateUrl: './pager.component.html'
})
export class PagerComponent {
  pagers : any[] = [{title:'上一页',callback: () => {window.alert('上一页');}},
    {title:'下一页',callback: () => {window.alert('下一页');}}];
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
