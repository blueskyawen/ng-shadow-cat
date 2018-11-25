/**
 * Created by liuxuwen on 18-11-20.
 */
import { Component,OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
    selector: 'demo-affix',
    templateUrl: './affix.component.html',
    styleUrls: ['./affix.component.css']
})
export class AffixComponent {
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;

    constructor(private router : Router) {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab2= this.tabItems[0].label;
    }

    goAffixDemo1() {
        this.router.navigate(['/pattern/affix/demo1']);
    }
}