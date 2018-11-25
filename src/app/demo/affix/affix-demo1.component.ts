/**
 * Created by liuxuwen on 18-11-25.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'affix-demo1',
    templateUrl: './affix-demo1.component.html',
    styleUrls: ['./affix.component.css']
})
export class AffixDemo1Component {
    tabItems : any[] = [];
    currentTab : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }
}