/**
 * Created by liuxuwen on 18-8-27.
 */
import { Component,AfterViewInit } from '@angular/core';

@Component({
  selector: 'demo-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent {
  listItems : any[] = [{title:'免费域名注册',active:false},
    {title:'免费 Window 空间托管',active:false},
    {title:'图像的数量',active:true},
    {title:'24*7 支持',active:false},
    {title:'每年更新成本',active:false}];
  listItems2 : any[] = [{title:'上海',active:false},{title:'北京',active:false},{title:'杭州',active:true},
    {title:'成都',active:false},{title:'西安',active:false},{title:'南京',active:false},{title:'重庆',active:false},
    {title:'广州',active:false},{title:'上饶',active:false},{title:'苏州',active:false},{title:'哈尔滨',active:false},
    {title:'长沙',active:false},{title:'深圳',active:false}];
  listItems3 : any[] = [{title:'上海',active:false},{title:'北京',active:false},{title:'杭州',active:true},
    {title:'成都',active:false},{title:'西安',active:false},{title:'南京',active:false},{title:'重庆',active:false},
    {title:'广州',active:false},{title:'上饶',active:false},{title:'苏州',active:false},{title:'哈尔滨',active:false},
    {title:'长沙',active:false},{title:'深圳',active:false}];
  tabItems : any[] = [];
  currentTab : string;
  tabItems1 : any[] = [];
  currentTab1 : string;
  items3Oper : string;
  curIndex3 = 2;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
    this.tabItems1 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab1= this.tabItems1[0].label;
  }

  selectItem(item : any,items : any[]) {
    items.forEach((listItem) => {listItem.active = false;});
    item.active = true;
  }
  
  selectItem3(item : any) {
    this.listItems3.forEach((listItem) => {listItem.active = false;});
    item.active = true;
    let itemIndex = this.listItems3.indexOf(item);
    this.items3Oper = '';
    if(itemIndex > this.curIndex3) {
      setTimeout(() => {
        this.items3Oper = 'prev';
      },100);
    }
    if(itemIndex < this.curIndex3) {
      setTimeout(() => {
        this.items3Oper = 'next';
      },100);
    }
    this.curIndex3 = itemIndex;
  }

}
