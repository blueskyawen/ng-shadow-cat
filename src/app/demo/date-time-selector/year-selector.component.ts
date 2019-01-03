/**
 * Created by liuxuwen on 19-1-2.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-year-selector',
    templateUrl: './year-selector.component.html',
    styleUrls: ['./date-time-selector.component.css']
})
export class YearSelectorComponent {
    year : number = 2019;
    year2 : number = 2019;
    disableYears : number[] = [2015];
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;
    tabItems3 : any[] = [];
    currentTab3 : string;
    isShow : boolean = false;
    name : string = 'Jack';

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab3= this.tabItems3[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab2 = this.tabItems2[0].label;
    }

    openSelector() {
        this.isShow = !this.isShow;
    }

    yearChange() {
        this.isShow = false;
    }
}
