/**
 * Created by liuxuwen on 18-11-16.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-number-input',
    templateUrl: './number-input.component.html'
})
export class NumberInputComponent {
    value : number = 36;
    tabItems : any[] = [];
    currentTab : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }
}