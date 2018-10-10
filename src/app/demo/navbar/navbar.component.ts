/**
 * Created by liuxuwen on 18-8-23.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  tabItems : any[] = [];
  currentTab : string;
  tabItems2 : any[] = [];
  currentTab2 : string;
  tabItems3 : any[] = [];
  currentTab3 : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab2 = this.tabItems[0].label;
    this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab3 = this.tabItems[0].label;
  }
}
