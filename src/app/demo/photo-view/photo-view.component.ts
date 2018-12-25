/**
 * Created by liuxuwen on 18-12-25.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-photo-view',
    templateUrl: './photo-view.component.html'
})
export class PhotoViewComponent {
    tabItems : any[] = [];
    currentTab : string;
    isShowPhotos : boolean = false;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }

    showPhotoView() {
        this.isShowPhotos = true;
    }
}