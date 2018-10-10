/**
 * Created by liuxuwen on 18-6-7.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-step',
  templateUrl: './step.component.html',
  styles: ['.buttons2 {padding-left: 78px;}']
})
export class StepComponent {
  stepItems : any[] = [
    {label: '基本信息'},
    {label: '附加信息'},
    {label: '高级设置'},
    {label: '构建成功'},
    {label: '最终结束'}
  ];
  curStepIndex : number = 0;

  tabItems1 : any[] = [];
  currentTab1 : string;
  tabItems2 : any[] = [];
  currentTab2 : string;

  constructor() {
    this.tabItems1 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab1= this.tabItems1[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab2= this.tabItems2[0].label;
  }

  preStep() {
    this.curStepIndex--;
  }

  nextStep() {
    this.curStepIndex++;
  }

  confirm() {

  }
}
