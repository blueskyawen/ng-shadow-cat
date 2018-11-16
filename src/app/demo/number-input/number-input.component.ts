/**
 * Created by liuxuwen on 18-11-16.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-number-input',
    templateUrl: './number-input.component.html'
})
export class NumberInputComponent {
    values : number[] = [36,54,78,30,20];
    tabItems : any[] = [];
    currentTab : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }
}