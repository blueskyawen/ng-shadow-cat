/**
 * Created by liuxuwen on 18-12-25.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'nc-photo-view',
    templateUrl: './nc-photo-view.component.html',
    styleUrls: ['./nc-photo-view.component.css']
})
export class NcPhotoViewComponent implements OnInit {
    @Input() photos : any[] = [
        {id:0,src:'https://z1.muscache.cn/im/pictures/4fe31a5a-41fb-490f-9aa0-e0b7ce1f706f.jpg?aki_policy=xx_large',
            alt: '1',title:''},
        {id:1,src:'https://z1.muscache.cn/im/pictures/1098f911-a27b-4075-8fad-90c184fbb66e.jpg?aki_policy=large',
            alt: '',title:''},
        {id:2,src:'https://z1.muscache.cn/im/pictures/56d7f836-150f-497f-9043-b12abde1a8b3.jpg?aki_policy=large',
            alt: '',title:''},
        { id:3,src:'https://z1.muscache.cn/im/pictures/dda1a265-5c27-44aa-bc06-07e5aef915ad.jpg?aki_policy=large',
            alt: '',title:''},
        {id:4,src:'https://z1.muscache.cn/im/pictures/4a1f9411-fef7-4cfe-9743-d797c445233e.jpg?aki_policy=large',
            alt: '',title:''},
        {id:5,src:'https://z1.muscache.cn/im/pictures/4a1f9411-fef7-4cfe-9743-d797c445233e.jpg?aki_policy=large',
            alt: '',title:''},
        { id:6,src:'https://z1.muscache.cn/im/pictures/2e1ccf9f-c91b-46f7-acf4-b7396dee225e.jpg?aki_policy=x_large',
            alt: '',title:''},
        {id:7,src:'https://z1.muscache.cn/im/pictures/09af23e6-1395-4b72-87f0-a7728ad8cb31.jpg?aki_policy=x_large',
            alt: '',title:''}
    ];
    @Input() isShow : boolean = false;
    @Output() isShowChange = new EventEmitter();
    photoNum : number = 0;
    curIndex : number = 0;

    constructor() {}

    ngOnInit() {
        this.photoNum = this.photos.length;
    }

    closeView() {
        this.isShow = false;
        this.isShowChange.emit(this.isShow);
    }
}