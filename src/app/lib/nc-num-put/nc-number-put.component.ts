/**
 * Created by liuxuwen on 18-11-15.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'nc-number-put',
    templateUrl: './nc-number-put.component.html',
    styleUrls: ['./nc-number-put.component.css']
})
export class NcNumberPutComponent implements OnInit {
    @Input() type : string = 'large';
    @Input() value : number = 88;
    @Output() valueChange = new EventEmitter();
    @Input() max : number = 99;
    @Input() min : number = 0;
    @Input() step : number = 1;
    numPutClasses : any = {};

    constructor() {
    }

    ngOnInit() {
        this.numPutClasses = {'input-lg':this.type === 'large','input-md':this.type === 'middle',
            'input-sm':this.type === 'small'};
    }

    inputAdd() {
        if(this.value >= this.max) {return;}
        if((this.value + this.step) >= this.max) {
            this.value = this.max;
        } else {
            this.value += this.step;
        }
    }

    inputDesc() {
        if(this.value <= this.min) {return;}
        if((this.step + this.min) >= this.value) {
            this.value = this.min;
        } else {
            this.value -= this.step;
        }
    }

    valueChanges() {
        this.valueChange.emit(this.value);
    }
}