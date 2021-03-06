/**
 * Created by liuxuwen on 19-1-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
import { NcDateSelectorBase } from './nc-date-selector.base';

@Component({
    selector: 'nc-date-time-selector',
    templateUrl: './nc-date-time-selector.component.html',
    styleUrls: ['./nc-date-time-selector.component.css']
})
export class NcDateTimeSelectorComponent extends NcDateSelectorBase implements OnInit {
    @Input() type : string = 'single';
    @Input() date : any;
    @Output() dateChange = new EventEmitter();
    @Input() width : string = '300px';
    @Input() ncFormat : string = 'yyyy/mm/dd hh:mm:ss';
    isShowDatePicker : boolean = true;
    timePickDayTitle : string;
    curDate : any = new Date();

    constructor() {
        super();
    }

    ngOnInit() {
        if(!this.date) {
            this.date = new Date();
        }
        this.selectorType = this.type;
        this.listenDocuClick();
        this.getFormat();
        this.setStyleAndClass();
        this.initData();
    }

    getFormat() {
        this.dateFormat = this.ncFormat.split(' ')[0].charAt(4);
        this.timeFormat = this.ncFormat.split(' ')[1].charAt(2);
    }

    setStyleAndClass() {
        this.selectorStyle = {'width':this.width};
    }

    initData() {
        this.curDate.setFullYear(this.date.getFullYear());
        this.curDate.setMonth(this.date.getMonth());
        this.curDate.setDate(this.date.getDate());
        this.curDate.setHours(this.date.getHours());
        this.curDate.setMinutes(this.date.getMinutes());
        this.curDate.setSeconds(this.date.getSeconds());
        this.getTimePickDayTitle();
        this.setDateValue();
    }

    openSelector() {
        if(this.type === 'input') {
            this.recoverData();
            this.isShowDatePicker = true;
            this.isHiddenSelector = false;
        }
    }

    getTimePickDayTitle() {
        this.timePickDayTitle = this.curDate.getFullYear() + '年 ' + (this.curDate.getMonth()+1) +
            '月 ' + this.curDate.getDate() + '日';
    }

    pickDateOrTime() {
        this.getTimePickDayTitle();
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
            this.value = this.formatValue(this.date.getFullYear()) + this.dateFormat +
                this.formatValue(this.date.getMonth() + 1) + this.dateFormat +
                this.formatValue(this.date.getDate()) + ' ' +
                this.date.toString().split(' ')[4].split(':').join(this.timeFormat);
        }
    }

    setDateDataAndValue() {
        this.date.setFullYear(this.curDate.getFullYear());
        this.date.setMonth(this.curDate.getMonth());
        this.date.setDate(this.curDate.getDate());
        this.date.setHours(this.curDate.getHours());
        this.date.setMinutes(this.curDate.getMinutes());
        this.date.setSeconds(this.curDate.getSeconds());
        this.setDateValue();
    }

    recoverData() {
        let tmpDate = new Date();
        tmpDate.setFullYear(this.date.getFullYear());
        tmpDate.setMonth(this.date.getMonth());
        tmpDate.setDate(this.date.getDate());
        tmpDate.setHours(this.date.getHours());
        tmpDate.setMinutes(this.date.getMinutes());
        tmpDate.setSeconds(this.date.getSeconds());
        this.curDate = tmpDate;
    }
}

