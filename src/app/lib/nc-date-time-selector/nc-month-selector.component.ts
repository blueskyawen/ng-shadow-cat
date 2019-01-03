import { Component,OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
    selector: 'nc-month-selector',
    templateUrl: './nc-month-selector.component.html',
    styleUrls: ['./nc-month-selector.component.css','./nc-date-time-selector.component.css']
})
export class NcMonthSelectorComponent implements OnInit {
    @Input() type : string = 'single';
    @Input() date : any = {};
    @Output() dateChange = new EventEmitter();
    @Input() disableMonths : number[] = [];
    @Input() width : string = '300px';
    months : any[] = [{value:0,label:'1月'},{value:1,label:'1月'},{value:2,label:'3月'},{value:3,label:'4月'},
        {value:4,label:'5月'},{value:5,label:'6月'},{value:6,label:'7月'},{value:7,label:'8月'},
        {value:8,label:'9月'},{value:9,label:'10月'},{value:10,label:'11月'},{value:11,label:'12月'}];
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;
    curYear : any;

    constructor() {
    }

    ngOnInit() {
        if(this.type == 'input') {
            document.addEventListener('click', () => {
                if (!this.isOverSelector) {
                    this.isHiddenSelector = true;
                }
            });
        }
        this.selectorStyle = {'width':this.width};
        this.curYear = this.date.getFullYear();
        this.months.forEach((month) => {
            month.disable = this.disableMonths.includes(month.value);
            month.active = month.value == this.date.getMonth();
        });
        this.setMonthValue();
    }

    setMonthValue() {
        if(this.type === 'input') {
            this.value = this.date.getFullYear() + '/' + (this.date.getMonth()+1);
        }
    }

    prevPage() {
        this.curYear--;
    }

    nextPage() {
        this.curYear++;
    }

    selectMonth(item : any) {
        if(item.disable || item.active) {
            return;
        }
        this.clearItems();
        item.active = true;
        this.date.setFullYear(this.curYear);
        this.date.setMonth(item.value);
        this.setMonthValue();
        this.dateChange.emit(this.date);
        this.closeSelector();
    }

    clearItems() {
        this.months.forEach((item) => {
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

