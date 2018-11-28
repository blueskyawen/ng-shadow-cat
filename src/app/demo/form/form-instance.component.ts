/**
 * Created by liuxuwen on 18-11-28.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-form-instance',
    templateUrl: './form-instance.component.html',
    styleUrls: ['./form.component.css']
})
export class FormInstanceComponent {
    loginData : any = {
        value: '',
        password: '',
        checkFlag: 0,
        loading:false
    };
    registerData : any = {
        value: '',
        password: '',
        checkFlag: 0,
        loading:false
    };
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;
    tabItems3 : any[] = [];
    currentTab3 : string;
    likes : any[] = [
        {value:'读书',isrequired:true}
    ];

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab2= this.tabItems2[0].label
        this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab3= this.tabItems3[0].label;
    }

    addLikeItem() {
        this.likes.push({value:'',isrequired:true});
        return false;
    }

    deleteLikeItem(item : any) {
        let index = this.likes.indexOf(item);
        this.likes.splice(index,1);
        return false;
    }

    login(data : any) {
        data.loading = true;
        setTimeout(() => {
            data.loading = false;
        },5000);
        return false;
    }

    checkIt(checked : number) {
        if(checked === 1) {
            checked = 0;
        }
        if(checked === 0) {
            checked = 1;
        }
    }
}