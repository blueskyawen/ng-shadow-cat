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
    placeClasses : any = {};
    placeTraslate : any = 'translateX(100%)';
    placeTraslateObj : any = {'right':'translateX(100%)','left':'translateX(-100%)',
        'top':'translateY(-100%)','down':'translateY(100%)'};
    showTraslateObj : any = {'right':'translateX(0%)','left':'translateX(0%)',
        'top':'translateY(0%)','down':'translateY(0%)'};

    constructor() {}

    ngOnInit() {
        this.placeClasses = {'drawer-place-right': this.place === 'right','drawer-place-left': this.place === 'left',
            'drawer-place-top': this.place === 'top','drawer-place-down': this.place === 'down'};
        if(this.isShow) {
            this.placeTraslate = this.showTraslateObj[this.place];
        } else {
            this.placeTraslate = this.placeTraslateObj[this.place];
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if(!changes['isShow'].firstChange) {
            this.isShow = changes['isShow'].currentValue;
            if(this.isShow) {
                this.setPlaceTraslate(this.showTraslateObj);
            }
        }
    }

    close() {
        this.setPlaceTraslate(this.placeTraslateObj);
        setTimeout(() => {
            this.isShow = false;
            this.isShowChange.emit(this.isShow);
        },600);
    }

    setPlaceTraslate(tranlateObj : any) {
        setTimeout(() => {
            this.placeTraslate = tranlateObj[this.place];
        },50);

    }
}