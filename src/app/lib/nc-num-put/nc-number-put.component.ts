/**
 * Created by liuxuwen on 18-11-15.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges, ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
    selector: 'nc-number-put',
    templateUrl: './nc-number-put.component.html',
    styleUrls: ['./nc-number-put.component.css']
})
export class NcNumberPutComponent implements OnInit,AfterViewInit {
    @Input() mode : string = 'normal';
    @Input() type : string = 'large';
    @Input() value : number = 88;
    @Output() valueChange = new EventEmitter();
    @Input() max : number = 99;
    @Input() min : number = 0;
    @Input() step : number = 1;
    numPutClasses : any = {};
    numReg : any = /^((\d)|([1-9]\d*))$/;
    isDisableAdd : boolean = false;
    isDisableDel : boolean = false;
    @ViewChild('numInput') inputDiv: ElementRef;
    nativeEl : any;

    constructor() {
    }

    ngOnInit() {
        this.numPutClasses = {'input-lg':this.type === 'large','input-md':this.type === 'middle',
            'input-sm':this.type === 'small','input-container-horizontal':this.mode === 'horizontal'};
    }

    ngAfterViewInit() {
        this.nativeEl = this.inputDiv.nativeElement;
    }

    inputAdd() {
        if(this.isDisableAdd) {return;}
        if((this.value + this.step) >= this.max) {
            this.value = this.max;
            this.valueChange.emit(this.value);
            this.disableDel(false);
            this.disableAdd(true);
        } else {
            this.value += this.step;
            this.valueChange.emit(this.value);
            this.disableDel(false);
            this.disableAdd(false);
        }
    }

    inputDesc() {
        if(this.isDisableDel) {return;}
        if((this.step + this.min) >= this.value) {
            this.value = this.min;
            this.valueChange.emit(this.value);
            this.disableDel(true);
            this.disableAdd(false);
        } else {
            this.value -= this.step;
            this.valueChange.emit(this.value);
            this.disableDel(false);
            this.disableAdd(false);
        }
    }

    valueChanges() {
        let curValue = this.nativeEl.value;
        if(!this.numReg.test(curValue)) {
            this.value = this.min;
            this.nativeEl.value = String(this.value);
            this.disableDel(true);
            this.disableAdd(false);
            return this.valueChange.emit(this.value);
        }
        this.value = +curValue;
        if(this.value < this.min) {
            this.value = this.min;
            this.nativeEl.value = String(this.value);
            this.valueChange.emit(this.value);
            this.disableDel(true);
            this.disableAdd(false);
        } else if(this.value > this.max) {
            this.value = this.max;
            this.nativeEl.value = String(this.value);
            this.valueChange.emit(this.value);
            this.disableDel(false);
            this.disableAdd(true);
        } else {
            this.valueChange.emit(this.value);
            this.disableDel(false);
            this.disableAdd(false);
        }
    }

    disableDel(flag : boolean) {
        if(flag && !this.isDisableDel) {
            return this.isDisableDel = true;
        }
        if(!flag && this.isDisableDel) {
            return this.isDisableDel = false;
        }
    }

    disableAdd(flag : boolean) {
        if(flag && !this.isDisableAdd) {
            return this.isDisableAdd = true;
        }
        if(!flag && this.isDisableAdd) {
            return this.isDisableAdd = false;
        }
    }
}
