/**
 * Created by liuxuwen on 18-11-12.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-avater',
    templateUrl: './avater.component.html'
})
export class AvaterComponent {
    imgSrcs : any[] = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542034193317&di=35c68f159f719a1af77f02666d694efe&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20180928%2F15%2F1538121289-sMcpvdUDTX.jpeg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1179569741,464641894&fm=26&gp=0.jpg'];
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab2= this.tabItems2[0].label;
    }

}
