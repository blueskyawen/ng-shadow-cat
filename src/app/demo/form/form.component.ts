/**
 * Created by liuxuwen on 18-11-20.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-form',
    templateUrl: './form.component.html'
})
export class FormComponent {
    value : string = 'Jack';
    value2 : string = 'Jack2';
    password : string = '';
    num : number = 1;
    num2 : string = '3';
    num2s : string = '127.0.0.1';
    units : any[] = [{label:'GB',value:'gb'}];
    units3 : any[] = [{label:'GB',value:'gb'},{label:'核',value:'core'}];
    units2 : any[] = [{label:'http://',value:'http://'}];
    units4 : any[] = [{label:'http://',value:'http://'},{label:'https://',value:'https://'}];
    textArea : string = '';
    sarchValue : string = '';
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;


    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab2= this.tabItems2[0].label
    }
}