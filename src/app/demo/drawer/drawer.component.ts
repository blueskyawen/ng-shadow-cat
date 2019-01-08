/**
 * Created by liuxuwen on 19-1-8.
 */
/**
 * Created by liuxuwen on 18-8-20.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.css']
})
export class DropDrawerComponent {
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;
    isShows : boolean[] = [false,false,false,false];

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab2= this.tabItems2[0].label;
    }

    openDrawer(index: number) {
        this.isShows[index] = true;
    }
}
