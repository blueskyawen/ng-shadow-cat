/**
 * Created by root on 6/1/19.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-resize-area',
    templateUrl: './resize-area.component.html',
    styles: ['.area-icon {display:inline-block;height:50px;width:120px;text-align:center;line-height:50px;border:solid 1px #999;background-color:#060;margin:10px;font-size:18px;color:#fff;}']
})
export class ResizeAreaComponent {
    tabItems : any[] = [];
    currentTab : string;
    curRate : number = 3;
    nums: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }
}
