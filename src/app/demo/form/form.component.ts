/**
 * Created by liuxuwen on 18-11-20.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-form',
    templateUrl: './form.component.html'
})
export class FormComponent {
    tabItems : any[] = [];
    currentTab : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }
}