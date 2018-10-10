/**
 * Created by liuxuwen on 18-6-5.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-proportion',
  templateUrl: './proportion.component.html'
})
export class ProportionComponent implements OnInit {
  tabItems : any[] = [];
  currentTab : string;
  curValue : number = 30;
  total : number = 100;
  tabItems2 : any[] = [];
  currentTab2 : string;
  timer : any = undefined;

  itemList1 : any[] = [
    {label: '选项1',color: '#009933',value: 30},
    {label: '选项2',color: '#ffa31a',value: 15},
    {label: '选项3',color: '#ff1a1a',value: 30}
  ];
  itemList2 : any[] = [
    {label: '选项1',color: '#009933',value: 70},
    {label: '选项2',color: '#ffa31a',value: 55},
    {label: '选项3',color: '#ff1a1a',value: 230}
  ];
  itemList : any[] = [
    {label: '选项1',color: '#009933',value: 30},
    {label: '选项2',color: '#ffa31a',value: 15},
    {label: '选项3',color: '#ff1a1a',value: 30}
  ];

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab2 = this.tabItems2[0].label;
  }

  ngOnInit() {
  }

  startDong() {
    this.timer = setInterval(() => {
      this.curValue = Math.round(Math.random() * 100);
    },2000);
  }

  stopDong() {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  startDong2() {
    this.timer = setInterval(() => {
      this.itemList = [
        {label: '选项1',color: '#009933',value: Math.round(Math.random() * 100 / 3)},
        {label: '选项2',color: '#ffa31a',value: Math.round(Math.random() * 100 / 3)},
        {label: '选项3',color: '#ff1a1a',value: Math.round(Math.random() * 100 / 3)}
      ];
    },2000);
  }

  stopDong2() {
    clearInterval(this.timer);
    this.timer = undefined;
  }
}
