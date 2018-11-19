/**
 * Created by liuxuwen on 18-11-20.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-affix',
    templateUrl: './affix.component.html',
    styleUrls: ['./affix.component.css']
})
export class AffixComponent {
    tabItems : any[] = [];
    currentTab : string;
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
}