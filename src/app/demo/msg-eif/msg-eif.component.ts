/**
 * Created by liuxuwen on 18-11-14.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-msg-eif',
    templateUrl: './msg-eif.component.html'
})
export class MsgEifComponent {
    tabItems : any[] = [];
    currentTab : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }
}