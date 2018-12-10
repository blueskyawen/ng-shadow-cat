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
        loading:false,
        disabled:true
    };
    registerData : any = {
        value: '',
        password: '',
        password2: '',
        sexs:[{label: '男', value: 'man',disabled:false},{label: '女', value: 'women',disabled:false}],
        sex:'man',
        name: '锦鲤',
        age:18,
        phone:'',
        phonePreffixs:[{label:'+86',value:'+86'}],
        webstore:'',
        webPreffixs:[{label:'http://',value:'http://'}],
        webSuffixs:[{label:'.com',value:'.com'}],
        isFirstRegister: true,
        education:'benke',
        educationOptions:[{label: '专科',value: 'zhuanke',disable: false},
            {label: '本科',value: 'benke',disable: false},
            {label: '硕士',value: 'shuoshi',disable: false},
            {label: '博士',value: 'boshi',disable: false},
            {label: '博士后',value: 'boshihou',disable: false}],
        educatAge:3,
        likeOptions:[{label: '读书', value: 'dushu',disable: false},{label: '旅游', value: 'lvyou',disable: false},
            {label: '跑步', value: 'run',disable: false},{label: '徒步', value: 'tubu',disable: false},
            {label: '爬山',value: 'pashan',disable: false},{label: '投资',value: 'touzhi',disable: false},
            {label: '美食',value: 'meishi',disable: false},{label: '睡觉', value: 'sleep',disable: false},
            {label: '音乐', value: 'mousic',disable: false}],
        likes:[],
        schools:[{value:'长安大学',isrequired:true}],
        description:'',
        weight:55,
        checkFlag: 0,
        loading:false,
        disabled:true
    };
    registerData2 : any = {
        value: '',
        patternName : /^[a-zA-Z0-9_]+$/,
        password: '',
        patternPw : /^[a-zA-Z0-9_]{6}$/,
        phone:'',
        patternPhone : /^1[3-8]{1}([0-9]{9})$/,
        phonePreffixs:[{label:'+86',value:'+86'}],
        checkFlag: 0,
        loading:false,
        disabled:true
    };
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;
    tabItems3 : any[] = [];
    currentTab3 : string;
    likes : any[] = [
        {value:'读书',isrequired:false}
    ];
    isShowMsg : boolean = false;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab2= this.tabItems2[0].label;
        this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab3= this.tabItems3[0].label;
    }

    deleteSchoolItem(items : any[],item : any) {
        if(items.length === 1) {return;}
        let index = items.indexOf(item);
        items.splice(index,1);
        return false;
    }

    addSchoolItem(items : any[]) {
        items.push({value:'',isrequired:false});
        return false;
    }

    login(data : any) {
        if(data.disabled) {return false;}
        data.loading = true;
        setTimeout(() => {
            data.loading = false;
            this.isShowMsg = true;
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

    recanselDefault() {
        return false;
    }

    isDisableLogin() {
        this.loginData.disabled = (this.loginData.checkFlag == 0) || !this.loginData.value || !this.loginData.password;
        return this.loginData.disabled;
    }

    isDisableRegister() {
        this.registerData.disabled = (this.registerData.checkFlag == 0) || !this.registerData.value ||
            !this.registerData.password || !this.registerData.password2 || !this.registerData.name ||
            !this.registerData.sex || !this.registerData.phone;
        return this.registerData.disabled;
    }
}