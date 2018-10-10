/**
 * Created by liuxuwen on 18-8-27.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css']
})
export class ListGroupComponent {
  titles : any[] = [{text:'成功！很好地完成了提交。',type: 'success'},
    {text:'信息！请注意这个信息。',type: 'info'},
    {text:'警告！请不要提交。',type: 'warn'},
    {text:'错误！请进行一些更改。',type: 'danger'}];
  callbackFun : any = () => {alert('错误！请进行一些更改');};
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }
}
