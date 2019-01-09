/**
 * Created by liuxuwen on 19-1-8.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'nc-drawer',
    templateUrl: './nc-drawer.component.html',
    styleUrls: ['./nc-drawer.component.css']
})
export class NcDrawerComponent implements OnInit,OnChanges {
    @Input() place : string = 'right';
    @Input() isShow : boolean = false;
    @Output() isShowChange = new EventEmitter();
    @Input() isShade : boolean = true;
    @Input() isShadeClose : boolean = true;
    @Input() isClosable : boolean = true;
    placeClasses : any = {};
    placeStyles : any = {};
    placeStylesObj : any = {
        'right':{'right':'0%'},
        'left':{'left':'0%'},
        'top':{'top':'0%'},
        'down':{'bottom':'0%'}
    };

    constructor() {}

    ngOnInit() {
        this.placeClasses = {'drawer-place-right': this.place === 'right','drawer-place-left': this.place === 'left',
            'drawer-place-top': this.place === 'top','drawer-place-down': this.place === 'down'};
        if(this.isShow) {
            this.placeStyles = this.placeStylesObj[this.place];
        } else {
            this.placeStyles = {};
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if(!changes['isShow'].firstChange) {
            this.isShow = changes['isShow'].currentValue;
            this.setPlaceTraslate(this.isShow);
        }
    }

    close() {
        this.placeStyles = {};
        setTimeout(() => {
            this.isShow = false;
            this.isShowChange.emit(this.isShow);
        },200);
    }

    shadeClose() {
        if(this.isShadeClose) {
            this.close();
        }
    }

    setPlaceTraslate(show : boolean) {
        if(show) {
            setTimeout(() => {
                this.placeStyles = this.placeStylesObj[this.place];
            },10);
        } else {
            setTimeout(() => {
                this.placeStyles = {};
            },10);
        }
    }
}
