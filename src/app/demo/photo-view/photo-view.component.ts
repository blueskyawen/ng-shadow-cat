/**
 * Created by liuxuwen on 18-12-25.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-photo-view',
    templateUrl: './photo-view.component.html',
    styleUrls: ['../thumbImg/thumb-img.component.css']
})
export class PhotoViewComponent {
    photos : any[] = [
        {id:0,src:'https://z1.muscache.cn/im/pictures/4fe31a5a-41fb-490f-9aa0-e0b7ce1f706f.jpg?aki_policy=xx_large',
            alt: '1',title:'温馨舒适全海景套房1'},
        {id:1,src:'https://z1.muscache.cn/im/pictures/1098f911-a27b-4075-8fad-90c184fbb66e.jpg?aki_policy=large',
            alt: '',title:'温馨舒适全海景套房2'},
        {id:2,src:'https://z1.muscache.cn/im/pictures/56d7f836-150f-497f-9043-b12abde1a8b3.jpg?aki_policy=large',
            alt: '',title:'温馨舒适全海景套房3'},
        { id:3,src:'https://z1.muscache.cn/im/pictures/dda1a265-5c27-44aa-bc06-07e5aef915ad.jpg?aki_policy=large',
            alt: '',title:'温馨舒适全海景套房4'},
        {id:4,src:'https://z1.muscache.cn/im/pictures/4a1f9411-fef7-4cfe-9743-d797c445233e.jpg?aki_policy=large',
            alt: '',title:'温馨舒适全海景套房5'},
        {id:5,src:'https://z1.muscache.cn/im/pictures/4a1f9411-fef7-4cfe-9743-d797c445233e.jpg?aki_policy=large',
            alt: '',title:'温馨舒适全海景套房6'},
        { id:6,src:'https://z1.muscache.cn/im/pictures/2e1ccf9f-c91b-46f7-acf4-b7396dee225e.jpg?aki_policy=x_large',
            alt: '',title:'温馨舒适全海景套房7'},
        {id:7,src:'https://z1.muscache.cn/im/pictures/09af23e6-1395-4b72-87f0-a7728ad8cb31.jpg?aki_policy=x_large',
            alt: '',title:'温馨舒适全海景套房8'}
    ];
    images : any[] = this.photos.slice(1,5);
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;
    tabItems3 : any[] = [];
    currentTab3 : string;
    isShowPhotos : boolean = false;
    isShowPhotos2 : boolean = false;
    isShowPhotos3 : boolean = false;
    isShowPhotos4 : boolean = false;
    curImgIndex : number = 0;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab2= this.tabItems[0].label;
        this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab3= this.tabItems3[0].label;
    }

    showPhotoView() {
        this.isShowPhotos = true;
    }

    showPhotoView2() {
        this.isShowPhotos2 = true;
    }

    showPhotoView3() {
        this.isShowPhotos3 = true;
    }

    openPhotoView(index : number) {
        this.curImgIndex = index;
        this.isShowPhotos4 = true;
    }
}
