/**
 * Created by liuxuwen on 18-5-30.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  tabItems : any[] = [];
  currentTab : string;
  isShowList : any[] = [false,false,false,false,false,false,false];
  tabItems2 : any[] = [];
  currentTab2 : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab2= this.tabItems[0].label;
  }

  alertMsg(index : number) {
    console.log('233');
    this.isShowList[index] = true;
  }

  manage(index : number) {
    console.log('2444');
    this.isShowList[index] = false;
  }
}
