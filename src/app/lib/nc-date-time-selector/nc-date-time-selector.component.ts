/**
 * Created by liuxuwen on 19-1-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
    selector: 'nc-date-time-selector',
    templateUrl: './nc-date-time-selector.component.html',
    styleUrls: ['./nc-date-time-selector.component.css']
})
export class NcDateTimeSelectorComponent implements OnInit {
    @Input() type : string = 'single';
    @Input() date : any;
    @Output() dateChange = new EventEmitter();
    @Input() width : string = '300px';
    @Input() ncFormat : string = 'yyyy/mm/dd hh:mm:ss';
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;
    isShowDatePicker : boolean = true;
    timePickDayTitle : string;

    constructor() {
    }

    ngOnInit() {
        if(!this.date) {
            this.date = new Date();
        }
        if(this.type == 'input') {
            document.addEventListener('click', () => {
                if (!this.isOverSelector) {
                    this.isHiddenSelector = true;
                }
            });
        }
        this.selectorStyle = {'width':this.width};
        this.getTimePickDayTitle();
        this.setDateValue();
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

    dateSelectChange() {
        this.getTimePickDayTitle();
    }

    getTimePickDayTitle() {
        this.timePickDayTitle = this.date.getFullYear() + '年 ' + (this.date.getMonth()+1) +
            '月 ' + this.date.getDate() + '日';
    }

    pickDateOrTime() {
        this.isShowDatePicker = !this.isShowDatePicker;
    }

    pickOk() {
        this.setDateValue();
        this.dateChange.emit(this.date);
        this.closeSelector();
    }

    getPickTitle() {
        return this.isShowDatePicker ? '选择时间' : '选择日期';
    }

    setDateValue() {
        if(this.type === 'input') {
            this.value = this.date.toString();
        }
    }
}

