/**
 * Created by liuxuwen on 18-12-23.
 */
import { Component, Input,ElementRef,Renderer2,AfterViewInit,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'nc-list-group-horizontal',
    templateUrl: './nc-list-group-horizontal.component.html',
    styleUrls: ['./nc-list-group.component.css']
})
export class NcListGroupHorizontalComponent implements AfterViewInit,OnChanges {
    @Input() stepWidth : number = 120;
    @Input() hideOper : boolean = false;
    @Input() operation : string = '';
    @Input() isShowOperation : boolean = true;
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

    ngOnChanges(changes: SimpleChanges) {
        let usrOper = changes['operation'];
        if(usrOper && usrOper.previousValue === '' && usrOper.currentValue === 'next') {
            this.clickNext();
        }
        if(usrOper && usrOper.previousValue === '' && usrOper.currentValue === 'prev') {
            this.clickPrev();
        }
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
        this.groupStyles = {'margin-left':'-'+this.marginLeft+'px'};
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
        this.groupStyles = {'margin-left':'-'+this.marginLeft+'px'};
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
