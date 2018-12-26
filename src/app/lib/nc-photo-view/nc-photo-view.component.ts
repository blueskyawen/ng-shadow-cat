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
    @Input() photos : any[] = [];
    @Input() isShow : boolean = false;
    @Output() isShowChange = new EventEmitter();
    @Input() isSlide : boolean = false;
    @Input() curIndex : number = 0;
    photoNum : number = 0;
    selectedPhoto : any = {};
    isShowPhotoList : boolean = true;
    isSwithSelection : boolean = false;
    listOper : string = '';

    constructor() {}

    ngOnInit() {
        this.photoNum = this.photos.length;
        this.selectDefaulPhoto();
        this.isSwithSelection = this.isSlide;
    }

    selectDefaulPhoto() {
        if(this.photoNum !== 0) {
            this.selectedPhoto = this.photos[this.curIndex];
        }
    }

    closeView() {
        this.isShow = false;
        this.isShowChange.emit(this.isShow);
    }

    hidePhotoList() {
        this.isShowPhotoList = !this.isShowPhotoList;
    }

    selectPhoto(item : any,index : number) {
        this.setSlideSwith();
        if(this.curIndex > index) {
            this.setListGroupOper('next');
        } else {
            this.setListGroupOper('prev');
        }
        this.selectedPhoto = item;
        this.curIndex = index;
    }

    swithPhoto(type : string) {
        if(type === 'prev') {
            if(this.curIndex > 0) {
                this.curIndex--;
                this.selectedPhoto = this.photos[this.curIndex];
                this.setSlideSwith();
                this.setListGroupOper('next');
            }
        }
        if(type === 'next') {
            if(this.curIndex < this.photoNum - 1) {
                this.curIndex++;
                this.selectedPhoto = this.photos[this.curIndex];
                this.setSlideSwith();
                this.setListGroupOper('prev');
            }
        }
    }

    setSlideSwith() {
        if(this.isSlide) {
            this.isSwithSelection = false;
            setTimeout(() => {
                this.isSwithSelection = true;
            },100);
        }
    }

    setListGroupOper(type : string) {
        this.listOper = '';
        setTimeout(() => {
            this.listOper = type;
        },100);
    }
}
