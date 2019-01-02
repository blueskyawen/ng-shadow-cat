/**
 * Created by liuxuwen on 19-1-2.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-date-time-selector',
    templateUrl: './date-time-selector.component.html'
})
export class DateTimeSelectorComponent {
    tabItems1 : any[] = [];
    currentTab1 : string;
    tabItems2 : any[] = [];
    currentTab2 : string;
    isShows : boolean[] = [false,false,false,false];
    name : string = 'Jack';

    constructor() {
        this.tabItems1 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab1 = this.tabItems1[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab2 = this.tabItems2[0].label;
    }
}
