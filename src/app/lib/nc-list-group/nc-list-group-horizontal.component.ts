/**
 * Created by liuxuwen on 18-12-23.
 */
import { Component, Input,ElementRef,Renderer2,AfterViewInit } from '@angular/core';

@Component({
    selector: 'nc-list-group-horizontal',
    templateUrl: './nc-list-group-horizontal.component.html',
    styleUrls: ['./nc-list-group.component.css']
})
export class NcListGroupHorizontalComponent implements AfterViewInit {
    @Input() stepWidth : number = 120;
    @Input() hideOper : boolean = false;
    groupStyles : any = {};
    marginLeft : number = 0;
    groupContainerWidth : number = 0;
    listContainerWidth : number = 0;
    isHideLeftOper : boolean = false;
    isHideRightOper : boolean = false;

    constructor(private el: ElementRef,private Renderer: Renderer2) {
    }

    ngAfterViewInit() {
        this.getWidths();
    }

    getWidths() {
        this.groupContainerWidth = this.el.nativeElement.getElementsByClassName("nc-list-group-container")[0].offsetWidth;
        this.listContainerWidth = this.el.nativeElement.getElementsByClassName("nc-list-container")[0].scrollWidth;
    }

    clickPrev() {
        if((this.marginLeft + this.groupContainerWidth) >= this.listContainerWidth) {
            return;
        }
        if((this.marginLeft + this.groupContainerWidth + this.stepWidth) < this.listContainerWidth) {
            this.marginLeft += this.stepWidth;
        } else {
            this.marginLeft = this.listContainerWidth - this.groupContainerWidth;
            this.checkHideOper('prev',true);
        }
        this.checkHideOper('next',false);
        this.groupStyles = {'transform':'translateX(-'+this.marginLeft+'px)'};
    }

    clickNext() {
        if(this.marginLeft <= 0) {
            return;
        }
        if(this.marginLeft > this.stepWidth) {
            this.marginLeft -= this.stepWidth;
        } else {
            this.marginLeft = 0;
            this.checkHideOper('next',true);
        }
        this.checkHideOper('prev',false);
        this.groupStyles = {'transform':'translateX(-'+this.marginLeft+'px)'};
    }

    checkHideOper(type : string,bflag: boolean) {
        if(!this.hideOper) {
            return;
        }
        if(type === 'prev') {
            return this.isHideLeftOper = bflag;
        }
        if(type === 'next') {
            return this.isHideRightOper = bflag;
        }
    }
}