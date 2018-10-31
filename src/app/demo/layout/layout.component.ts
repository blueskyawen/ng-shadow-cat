/**
 * Created by liuxuwen on 18-10-31.
 */
/**
 * Created by liuxuwen on 18-8-23.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    tabItems : any[] = [];
    currentTab : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }
}
