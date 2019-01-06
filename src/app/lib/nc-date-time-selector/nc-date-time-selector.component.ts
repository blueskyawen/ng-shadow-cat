/**
 * Created by liuxuwen on 19-1-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

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
    dateFormat : string = '/';
    timeFormat : string = ':';
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;
    isShowDatePicker : boolean = true;
    timePickDayTitle : string;
    curDate : any = new Date();
    oldDate : any = new Date();

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
                    console.log('addEventListener');
                    this.recoverData();
                }
            });
        }
        this.dateFormat = this.ncFormat.split(' ')[0].charAt(4);
        this.timeFormat = this.ncFormat.split(' ')[1].charAt(2);
        this.selectorStyle = {'width':this.width};
        this.initDate();
    }

    initDate() {
        let year = this.date.getFullYear();
        let month = this.date.getMonth();
        let day = this.date.getDate();
        let hour = this.date.getHours();
        let minute = this.date.getMinutes();
        let second = this.date.getSeconds();
        this.curDate.setFullYear(year);
        this.curDate.setMonth(month);
        this.curDate.setDate(day);
        this.curDate.setHours(hour);
        this.curDate.setMinutes(minute);
        this.curDate.setSeconds(second);
        this.oldDate.setFullYear(year);
        this.oldDate.setMonth(month);
        this.oldDate.setDate(day);
        this.oldDate.setHours(hour);
        this.oldDate.setMinutes(minute);
        this.oldDate.setSeconds(second);
        this.getTimePickDayTitle();
        this.setDateValue();
    }

    openSelector() {
        if(this.type === 'input') {
            this.isShowDatePicker = true;
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
        console.log('dateSelectChange');
        console.log(this.date);
        console.log(this.oldDate);
        console.log(this.curDate);
        console.log('dateSelectChange');
        this.getTimePickDayTitle();
    }

    getTimePickDayTitle() {
        this.timePickDayTitle = this.curDate.getFullYear() + '年 ' + (this.curDate.getMonth()+1) +
            '月 ' + this.curDate.getDate() + '日';
    }

    pickDateOrTime() {
        this.isShowDatePicker = !this.isShowDatePicker;
    }

    pickOk() {
        this.setDateDataAndValue();
        this.dateChange.emit(this.date);
        this.closeSelector();
    }

    getPickTitle() {
        return this.isShowDatePicker ? '选择时间' : '选择日期';
    }

    setDateValue() {
        if(this.type === 'input') {
            this.value = this.date.getFullYear() + this.dateFormat + (this.date.getMonth() + 1) + this.dateFormat
                + this.date.getDate() + ' ' + this.date.getHours() + this.timeFormat + this.date.getMinutes() +
                this.timeFormat + this.date.getSeconds();
        }
    }

    setDateDataAndValue() {
        let year = this.curDate.getFullYear();
        let month = this.curDate.getMonth();
        let day = this.curDate.getDate();
        let hour = this.curDate.getHours();
        let minute = this.curDate.getMinutes();
        let second = this.curDate.getSeconds();
        this.date.setFullYear(year);
        this.date.setMonth(month);
        this.date.setDate(day);
        this.date.setHours(hour);
        this.date.setMinutes(minute);
        this.date.setSeconds(second);
        this.setDateValue();
    }

    recoverData() {
        console.log('recoverData');
        console.log(this.date);
        console.log(this.oldDate);
        console.log(this.curDate);
        console.log('recoverData');
        let year = this.oldDate.getFullYear();
        let month = this.oldDate.getMonth();
        let day = this.oldDate.getDate();
        let hour = this.oldDate.getHours();
        let minute = this.oldDate.getMinutes();
        let second = this.oldDate.getSeconds();
        this.curDate.setFullYear(year);
        this.curDate.setMonth(month);
        this.curDate.setDate(day);
        this.curDate.setHours(hour);
        this.curDate.setMinutes(minute);
        this.curDate.setSeconds(second);
        this.isShowDatePicker = false;
    }
}

