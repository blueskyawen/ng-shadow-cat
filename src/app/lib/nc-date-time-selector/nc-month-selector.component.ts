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
    @Input() ncFormat : string = 'yyyy/mm';
    @Input() insert : boolean = false;
    @Input() hideShadow : boolean = false;
    months : any[] = [{value:0,label:'1月'},{value:1,label:'2月'},{value:2,label:'3月'},{value:3,label:'4月'},
        {value:4,label:'5月'},{value:5,label:'6月'},{value:6,label:'7月'},{value:7,label:'8月'},
        {value:8,label:'9月'},{value:9,label:'10月'},{value:10,label:'11月'},{value:11,label:'12月'}];
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;
    curYear : any;
    formatLabel : string;

    constructor() {
    }

    ngOnInit() {
        this.listenDocuClick();
        this.getFormat();
        this.setStyleAndClass();
        this.initData();
    }

    listenDocuClick() {
        if(this.type == 'input') {
            document.addEventListener('click', (event) => {
                if (!this.isOverSelector) {
                    this.isHiddenSelector = true;
                    //this.recoverData();
                    //this.setDateValue();
                }
                event.stopPropagation();
            });
        }
    }

    getFormat() {
        this.formatLabel = this.ncFormat[4];
    }

    setStyleAndClass() {
        this.selectorStyle = {'width':this.width};
    }

    initData() {
        this.curYear = this.date.getFullYear();
        this.months.forEach((month) => {
            month.disable = this.disableMonths.includes(month.value);
            month.active = month.value == this.date.getMonth();
        });
        this.setDateValue();
    }

    setDateValue() {
        if(this.type === 'input') {
            this.value = this.formatValue(this.date.getFullYear()) + this.formatLabel +
                this.formatValue(this.date.getMonth()+1);
        }
    }

    formatValue(value : number) {
        return value < 10 ? '0'+value : value.toString();
    }

    prevPage() {
        this.curYear--;
    }

    nextPage() {
        this.curYear++;
    }

    selectMonth(item : any) {
        if(item.disable) {
            return;
        }
        if(item.active) {
            this.dateChange.emit(this.date);
            this.closeSelector();
            return;
        }
        this.clearItems();
        item.active = true;
        this.date.setFullYear(this.curYear);
        this.date.setMonth(item.value);
        this.setDateValue();
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
            this.recoverData();
            this.isHiddenSelector = false;
        }
    }

    closeSelector() {
        if(this.type === 'input') {
            this.isHiddenSelector = true;
        }
    }

    recoverData() {
        this.curYear = this.date.getFullYear();
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

