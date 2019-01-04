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
    @Input() disableYears : number[] = [];
    @Input() width : string = '300px';
    @Input() insert : boolean = false;
    @Input() hideShadow : boolean = false;
    years : any[] = [];
    minYear : number;
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;

    constructor() {
    }

    ngOnInit() {
        if(this.type == 'input') {
            document.addEventListener('click', () => {
                if (!this.isOverSelector) {
                    this.isHiddenSelector = true;
                    this.recoverData();
                }
            });
        }
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

    recoverData() {
        this.minYear = this.year - 5;
        this.years = this.initYearData();
    }

    mouseover() {
        if(this.type === 'input') {
            this.isOverSelector = true;
        }
    }

    mouseout() {
        if(this.type === 'input') {
            this.isOverSelector = false;
        }
    }
}
