import { Component,OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import { NcDateSelectorBase } from './nc-date-selector.base';

@Component({
    selector: 'nc-year-selector',
    templateUrl: './nc-year-selector.component.html',
    styleUrls: ['./nc-year-selector.component.css','./nc-date-time-selector.component.css']
})
export class NcYearSelectorComponent extends NcDateSelectorBase implements OnInit {
    @Input() type : string = 'single';
    @Input() year : number = 2019;
    @Output() yearChange = new EventEmitter();
    @Input() disableYears : number[] = [];
    @Input() width : string = '300px';
    @Input() insert : boolean = false;
    @Input() hideShadow : boolean = false;
    years : any[] = [];
    minYear : number;

    constructor() {
        super();
    }

    ngOnInit() {
        this.selectorType = this.type;
        this.listenDocuClick();
        this.setStyleAndClass();
        this.initData();
        this.setDateValue();
        this.initData();
    }

    setStyleAndClass() {
        this.selectorStyle = {'width':this.width};
    }

    initData() {
        this.minYear = this.year - 5;
        this.years = this.initYearData();
    }

    setDateValue() {
        if(this.type === 'input') {
            this.value = this.year.toString();
        }
    }

    initYearData() {
        let tmpYears : any[] = [];
        for(let i = 0;i < 12;i++) {
            tmpYears.push({value:this.minYear + i,
                disable:this.disableYears.includes(this.minYear + i),
                active:this.year == this.minYear + i});

        }
        return tmpYears;
    }

    prevPage() {
        this.minYear -= 12;
        this.years = this.initYearData();
    }

    nextPage() {
        this.minYear += 12;
        this.years = this.initYearData();
    }

    selectYear(item : any) {
        if(item.disable) {
            return;
        }
        if(item.active) {
            this.yearChange.emit(this.year);
            this.closeSelector();
            return;
        }
        this.clearItems(this.years);
        item.active = true;
        this.year = item.value;
        this.yearChange.emit(this.year);
        this.setDateValue();
        this.closeSelector();
    }

    openSelector() {
        if(this.type === 'input') {
            this.recoverData();
            this.isHiddenSelector = false;
        }
    }

    recoverData() {
        this.minYear = this.year - 5;
        this.years = this.initYearData();
    }
}
