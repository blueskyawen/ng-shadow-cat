/**
 * Created by liuxuwen on 18-6-6.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  tabItems1 : any[] = [];
  currentTab1 : string;
  tabItems2 : any[] = [];
  currentTab2 : string;
  isShows : boolean[] = [false,false,false,false];

  constructor() {
    this.tabItems1 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab1 = this.tabItems1[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab2 = this.tabItems2[0].label;
  }

  openDialog(index: number) {
    this.isShows[index] = true;
  }
}
