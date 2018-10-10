/**
 * Created by liuxuwen on 18-6-2.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadCrumbComponent {
  breadItems : any[] = [
    {url: 'http://home.baidu.com/',label: '百度',isDisable: false},
    {url: 'https://www.baidu.com/more/',label: '百度产品',isDisable: false},
    {url: 'https://xiongzhang.baidu.com/site',label: '熊掌号',isDisable: false},
    {label: '登录'}
  ];
  breadItems2 : any[] = [
    {url: 'http://home.baidu.com/',label: '百度',isDisable: false},
    {url: 'https://www.baidu.com/more/',label: '百度产品',isDisable: true},
    {url: 'https://xiongzhang.baidu.com/site',label: '熊掌号',isDisable: true},
    {label: '登录'}
  ];
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
