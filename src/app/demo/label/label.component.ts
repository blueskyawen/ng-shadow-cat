/**
 * Created by liuxuwen on 18-8-22.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-label',
  templateUrl: './label.component.html'
})
export class LabelComponent {
  titles : any[] = [{text:'成功！很好地完成了提交。',type: 'success'},
    {text:'信息！请注意这个信息。',type: 'info'},
    {text:'警告！请不要提交。',type: 'warn'},
    {text:'错误！请进行一些更改。',type: 'danger'}];
  callbackFun : any = () => {alert('错误！请进行一些更改');};
  tabItems : any[] = [];
  currentTab : string;
  backColors: string[] = ['#d9d9d9','#ffaa80','#80aaff','#8cd9b3','#ff80ff',
    '#b3b3cc','#bfff80','#d4ff80','#d4d4aa','#df9fdf'];
  myBackColor: string;

  constructor() {
    this.myBackColor = this.backColors[0];
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }

  changeBackColor() {
    this.myBackColor = this.backColors[this.getRandomNum()];
  }

  getRandomNum() {
    return Math.ceil(Math.random() * 10);
  }
}
