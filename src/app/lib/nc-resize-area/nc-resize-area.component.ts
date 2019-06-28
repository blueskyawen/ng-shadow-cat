/**
 * Created by root on 6/1/19.
 */
import { Component,OnInit,Input,Output,AfterViewInit,ElementRef,Renderer2,ViewChild} from '@angular/core';

@Component({
    selector: 'nc-left-size-area',
    template: `<ng-content></ng-content>`
})
export class NcLeftSizeAreaComponent {
}

@Component({
    selector: 'nc-right-size-area',
    template: `<ng-content></ng-content>`
})
export class NcRightSizeAreaComponent {
}

@Component({
    selector: 'nc-resize-area',
    templateUrl: './nc-resize-area.component.html',
    styleUrls: ['./nc-resize-area.component.css']
})
export class NcResizeAreaComponent implements OnInit,AfterViewInit {
    @Input() leftWidth : string = '50%';
    @Input() minLeftWidth : number = 100;
    @Input() minRightWidth : number = 100;
    @Input() resizeAble : boolean = true;
    @Input() noBorder : boolean = true;
    @Input() singleArea : boolean = false;
    @ViewChild('resizeContainer')
        resizeContainerRef: ElementRef;
    @ViewChild('leftArea')
        leftAreaRef: ElementRef;
    @ViewChild('rightArea')
        rightAreaRef: ElementRef;
    @ViewChild('resizeBorder')
        resizeBorderRef: ElementRef;
    resizeContainerElem : any;
    leftAreaElem : any;
    rightAreaElem : any;
    resizeBorderElem : any;
    containerWidth: number = 0;
    leftAreaWidth: string;

    isMoving: boolean = false;
    mouseClientX: number = 0;
    leftOffsetWidth: number = 0;
    rightOffsetWidth: number = 0;
    moveTimer: any;

    constructor(private renderer: Renderer2,private el: ElementRef) {

    }

    ngOnInit() {
        if(this.singleArea) {
            this.noBorder = true;
            this.leftAreaWidth = '100%';
        } else {
            if (!!this.leftWidth) {
                this.leftAreaWidth = this.noBorder ? this.leftWidth.toString() : `calc(${this.leftWidth} - 10px)`;
            }
        }

    }

    ngAfterViewInit() {
        this.resizeContainerElem = this.resizeContainerRef.nativeElement;
        this.leftAreaElem = this.leftAreaRef.nativeElement;
        this.rightAreaElem = this.rightAreaRef.nativeElement;
        this.resizeBorderElem = this.resizeBorderRef.nativeElement;
        this.containerWidth = this.resizeContainerElem.offsetWidth;
        this.initEvent();
    }

    initEvent() {
        this.renderer.listen(this.resizeBorderElem, 'mousedown', (event: MouseEvent) => {
            this.mouseClientX = event.clientX;
            this.leftOffsetWidth = this.leftAreaElem.offsetWidth;
            this.rightOffsetWidth = this.rightAreaElem.offsetWidth;
            this.isMoving = true;
        });

        this.renderer.listen(this.resizeBorderElem, 'mouseup', () => {
            this.isMoving = false;
        });

        this.renderer.listen('window', 'mouseup', () => {
            this.isMoving = false;
        });

        this.renderer.listen(this.el.nativeElement, 'mousemove', (event: MouseEvent) => {
            this.resizeAble && this.isMoving && this.handlerMouseMove(event);
        });
    }

    handlerMouseMove(event: MouseEvent) {
        if(!this.moveTimer) {
            this.moveTimer = setTimeout(() => {
                this.computeResizeWidth(event);
                this.moveTimer = undefined;
            },30);
        }
    }

    computeResizeWidth(event: MouseEvent) {
        if (!this.isMoving) {
            return;
        }
        let currentX = event.clientX;
        if(currentX < this.mouseClientX && this.leftOffsetWidth + currentX < this.mouseClientX + this.minLeftWidth) {
            return;
        }
        if(!this.singleArea && currentX > this.mouseClientX &&
            this.rightOffsetWidth + this.mouseClientX < currentX + this.minRightWidth) {
            return;
        }
        if(this.singleArea && currentX > this.mouseClientX &&
            this.containerWidth + this.mouseClientX < currentX + this.leftOffsetWidth) {
            return;
        }
        this.leftAreaWidth = `${this.leftOffsetWidth + currentX - this.mouseClientX}px`;
    }

}
