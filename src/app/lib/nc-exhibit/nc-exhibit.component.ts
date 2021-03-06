/**
 * Created by liuxuwen on 18-8-19.
 */
import { Component,OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit, } from '@angular/core';

@Component({
    selector: 'nc-exhibit',
    templateUrl: './nc-exhibit.component.html',
    styleUrls: ['./nc-exhibit.component.css']
})
export class NcExhibitComponent  implements OnInit, AfterViewInit {
    @Input() options : any[] = [];
    @Input() width : number = 1200;
    @Input() height : number = 500;
    @Input() curIndex : number = 1;
    @Output() curIndexChange = new EventEmitter<number>();
    imageWidth: number = 0;
    showImageLen: number = 0;
    trans_x_left: string = '';
    trans_x_right: string = '';
    trans_xx_left: string = '';
    trans_xx_right: string = '';
    trans_z: string = '';
    imageDoms: any[] = [];
    @ViewChild('exhibit') exhibitRef: ElementRef;
    nativeEl: any;
    @ViewChild('exhibitCont') exhibitContRef: ElementRef;

    constructor() {}

    ngOnInit() {
        this.init();
    }

    ngAfterViewInit() {
        this.nativeEl = this.exhibitRef.nativeElement;
        this.exhibitContRef.nativeElement.style.width = `${this.width}px`;
        if(this.height >= this.showImageLen + 60) {
            this.exhibitContRef.nativeElement.style.height = `${this.height}px`;
        } else {
            this.exhibitContRef.nativeElement.style.height = `${this.showImageLen+100}px`;
        }
        this.initLocation();
    }

    init() {
        this.imageWidth = Math.round((9*this.width - 180)/35);
        this.showImageLen = Math.round(this.imageWidth*5/3);
        let trans_x = Math.round(this.imageWidth*25/12);
        let trans_xx = Math.round(this.width*3/4 + this.imageWidth);
        this.trans_x_left = `translateX(-${trans_x}px) translateZ(-500px)`;
        this.trans_x_right = `translateX(${trans_x}px) translateZ(-500px)`;
        this.trans_xx_left = `translateX(-${trans_xx}px) translateZ(-500px)`;
        this.trans_xx_right = `translateX(${trans_xx}px) translateZ(-500px)`;
        this.trans_z = 'translateX(0px) translateZ(300px)';
        if(this.curIndex < 0 || this.curIndex >= this.options.length) {
            this.curIndex =  Math.floor(this.options.length/2);
        }
    }

    initLocation() {
        this.imageDoms = this.nativeEl.querySelectorAll("img");
        for(let i=0;i<this.options.length;i++) {
            if(i+1 < this.curIndex) {
                this.imageDoms[i].style.transform = this.trans_xx_left;
            } else if(i+1 === this.curIndex) {
                this.imageDoms[i].style.transform = this.trans_x_left;
            } else if(i === this.curIndex) {
                this.imageDoms[i].style.transform = this.trans_z;
            } else if(i === this.curIndex+1) {
                this.imageDoms[i].style.transform = this.trans_x_right;
            } else {
                this.imageDoms[i].style.transform = this.trans_xx_right;
            }
        }
    }

    operPrev() {
        if(this.curIndex === 0) {
            return;
        }
        if(this.curIndex+1 < this.imageDoms.length) {
            this.imageDoms[this.curIndex+1].style.transform = this.trans_xx_right;
        }
        this.imageDoms[this.curIndex].style.transform = this.trans_x_right;
        this.imageDoms[this.curIndex-1].style.transform = this.trans_z;
        if(this.curIndex > 1) {
            this.imageDoms[this.curIndex-2].style.transform = this.trans_x_left;
        }
        this.curIndex--;
        this.curIndexChange.emit(this.curIndex);
    }

    operNext() {
        if(this.curIndex+1 === this.imageDoms.length) {
            return;
        }
        if(this.curIndex > 0) {
            this.imageDoms[this.curIndex-1].style.transform = this.trans_xx_left;
        }
        this.imageDoms[this.curIndex].style.transform = this.trans_x_left;
        this.imageDoms[this.curIndex+1].style.transform = this.trans_z;
        if(this.curIndex+2 < this.imageDoms.length) {
            this.imageDoms[this.curIndex+2].style.transform = this.trans_x_right;
        }
        this.curIndex++;
        this.curIndexChange.emit(this.curIndex);
    }

    selectImage(i: number) {
        if(i == this.curIndex) {
            return;
        } else if(i < this.curIndex) {
            this.operPrev();
        } else {
            this.operNext();
        }
    }
}
