import { Component,OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
    selector: 'nc-year-selector',
    templateUrl: './nc-year-selector.component.html',
    styleUrls: ['./nc-year-selector.component.css','./nc-date-time-selector.component.css']
})
export class NcYearSelectorComponent implements OnInit {
    @Input() type : string = 'single';
    @Input() year : number = 2019;
    @Output() yearChange = new EventEmitter();
    @Input() disableYears : number[] = [2014];
    @Input() width : string = '300px';
    years : any[] = [];
    minYear : number;
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;

    constructor() {
    }

    ngOnInit() {
        this.selectorStyle = {'width':this.width};
        this.setYearValue();
        this.minYear = this.year - 5;
        this.years = this.initYearData();
    }

    setYearValue() {
        if(this.type === 'input') {
            this.value = this.year.toString();
        }
    }

    initYearData() {
        let tmpYears : any[] = [];
        for(let i = 0;i < 12;i++) {
            tmpYears.push({value:this.minYear + i,
                disable:this.disableYears.includes(i),
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
        if(item.disable || item.active) {
            return;
        }
        this.clearItems();
        item.active = true;
        this.year = item.value;
        this.yearChange.emit(this.year);
        this.setYearValue();
        this.closeSelector();
    }

    clearItems() {
        this.years.forEach((item) => {
            if(!item.disable) {
                item.active = false;
            }
        });
    }

    openSelector() {
        if(this.type === 'input') {
            this.isHiddenSelector = false;
        }
    }

    closeSelector() {
        if(this.type === 'input') {
            this.isHiddenSelector = true;
        }
    }
}
