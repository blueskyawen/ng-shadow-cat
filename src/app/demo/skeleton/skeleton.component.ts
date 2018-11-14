/**
 * Created by liuxuwen on 18-11-14.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-skeleton',
    templateUrl: './skeleton.component.html',
    styles: ['.buttons2 {padding-left: 78px;}']
})
export class SkeletonComponent {
    tabItems1 : any[] = [];
    currentTab1 : string;

    constructor() {
        this.tabItems1 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab1= this.tabItems1[0].label;
    }
}