/**
 * Created by liuxuwen on 19-1-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit,OnChanges,SimpleChanges } from '@angular/core';
import { NcDateSelectorBase } from './nc-date-selector.base';

@Component({
    selector: 'nc-date-selector',
    templateUrl: './nc-date-selector.component.html',
    styleUrls: ['./nc-date-selector.component.css','./nc-date-time-selector.component.css']
})
export class NcDateSelectorComponent extends NcDateSelectorBase implements OnInit,OnChanges {
    @Input() type : string = 'single';
    @Input() date : any;
    @Output() dateChange = new EventEmitter();
    @Input() width : string = '300px';
    @Input() ncFormat : string = 'yyyy/mm/dd';
    @Input() insert : boolean = false;
    @Input() hideShadow : boolean = false;
    today : any = new Date();
    year : number;
    month : number;
    day : number;
    weeks = ['日','一','二','三','四','五','六'];
    yearMonthDate : any = {
        year: 2019,
        month: 0,
        dayDatas: []
    };
    isShowDatePicker : boolean = true;
    isShowYearPicker : boolean = false;
    isShowMonthPicker : boolean = false;
    monthPickerDate : any = new Date();

    constructor() {
        super();
    }

    ngOnChanges(changes: SimpleChanges) {
        if(changes['date'] && !changes['date'].firstChange) {
            this.date = changes['date'].currentValue;
            this.setSelectedDate();
            this.yearMonthDate.year = this.year;
            this.yearMonthDate.month = this.month;
            this.getYearMonthDate();
            this.setDateValue();
        }
    }

    ngOnInit() {
        this.selectorType = this.type;
        this.listenDocuClick();
        this.getFormat();
        this.setStyleAndClass();
        this.initData();
        this.getYearMonthDate();
        this.setDateValue();
    }

    getFormat() {
        this.formatLabel = this.ncFormat[4];
    }

    setStyleAndClass() {
        this.selectorStyle = {'width':this.width};
    }

    initData() {
        if(!this.date) {
            this.date = new Date();
        }
        this.setSelectedDate();
        this.yearMonthDate.year = this.year;
        this.yearMonthDate.month = this.month;
    }

    getYearMonthDate() {
        let tmpDays = [];
        //获取该月第一天为星期几
        let firstDateOfCurMonth = new Date(this.yearMonthDate.year, this.yearMonthDate.month, 1);
        let firstDateOfCurMonth_day = firstDateOfCurMonth.getDay();
        //获取该月最后一天的日期
        let lastDateOfCurMonth = new Date(this.yearMonthDate.year, this.yearMonthDate.month + 1, 0);
        let lastDateOfCurMonth_date = lastDateOfCurMonth.getDate();
        //获取上一个月最后一天的日期
        let lastDateOfPrevMonth = new Date(this.yearMonthDate.year, this.yearMonthDate.month, 0);
        let lastDateOfPrevMonth_date = lastDateOfPrevMonth.getDate();
        //上个月
        for (let i = 0;i < firstDateOfCurMonth_day;i++) {
            tmpDays.unshift({
                "date": lastDateOfPrevMonth_date - i,
                "active": false,
                "disable": true,
                "today": false
            });
        }
        //本月
        for (let i = 0;i < lastDateOfCurMonth_date;i++) {
            if(this.yearMonthDate.year === this.year && this.yearMonthDate.month === this.month && this.day == i + 1) {
                tmpDays.push({
                    "date": i + 1,
                    "active": true,
                    "disable": false,
                    "today": false
                });
            } else if(this.today.getFullYear() === this.yearMonthDate.year &&
                this.today.getMonth() === this.yearMonthDate.month  &&
                this.today.getDate() == i + 1) {
                tmpDays.push({
                    "date": i + 1,
                    "active": false,
                    "disable": false,
                    "today": true
                });
            } else {
                tmpDays.push({
                    "date": i + 1,
                    "active": false,
                    "disable": false,
                    "today": false
                });
            }
        }
        //下个月
        let leftMonthLength = 42 - tmpDays.length;
        for (let i = 0; i < leftMonthLength; i++) {
            tmpDays.push({
                "date": i + 1,
                "active": false,
                "disable": true,
                "today": false
            });
        }
        this.yearMonthDate.dayDatas = tmpDays;
    }

    setDateValue() {
        if(this.type === 'input') {
            this.value = this.formatValue(this.date.getFullYear()) + this.formatLabel +
                this.formatValue(this.date.getMonth() + 1) + this.formatLabel +
                this.formatValue(this.date.getDate());
        }
    }

    selectDay(item : any) {
        if(item.disable || item.active) {
            return;
        }
        this.clearItems(this.yearMonthDate.dayDatas);
        item.active = true;
        this.emitDateChange(item.date);
    }

    setSelectedDate() {
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
    }

    prevYear() {
        this.yearMonthDate.year--;
        this.getYearMonthDate();
    }

    nextYear() {
        this.yearMonthDate.year++;
        this.getYearMonthDate();
    }

    prevMonth() {
        if(this.yearMonthDate.month === 0) {
            this.yearMonthDate.month = 11;
            this.yearMonthDate.year--;
        } else {
            this.yearMonthDate.month--;
        }
        this.getYearMonthDate();
    }

    nextMonth() {
        if(this.yearMonthDate.month === 11) {
            this.yearMonthDate.month = 0;
            this.yearMonthDate.year++;
        } else {
            this.yearMonthDate.month++;
        }
        this.getYearMonthDate();
    }

    openSelector() {
        if(this.type === 'input') {
            this.recoverData();
            this.isHiddenSelector = false;
        }
    }

    recoverData() {
        this.yearMonthDate.year = this.year;
        this.yearMonthDate.month = this.month;
        this.getYearMonthDate();
    }

    selectToday() {
        let todayYear = this.today.getFullYear();
        let todayMonth = this.today.getMonth();
        let todayDay = this.today.getDate();
        if(todayYear !== this.yearMonthDate.year || todayMonth !== this.yearMonthDate.month) {
            this.yearMonthDate.year = todayYear;
            this.yearMonthDate.month = todayMonth;
            this.getYearMonthDate();
        } else {
            this.clearItems(this.yearMonthDate.dayDatas);
        }
        for(let day of this.yearMonthDate.dayDatas) {
            if(!day.disable && day.date == todayDay) {
                day.active = true;
                break;
            }
        }
        this.emitDateChange(todayDay);
    }

    emitDateChange(day : any) {
        this.date.setFullYear(this.yearMonthDate.year);
        this.date.setMonth(this.yearMonthDate.month);
        this.date.setDate(day);
        this.setSelectedDate();
        this.setDateValue();
        this.dateChange.emit(this.date);
        this.closeSelector();
    }

    pickYear() {
        this.clearPickerFlag();
        this.isShowYearPicker = true;
    }

    pickMonth() {
        this.monthPickerDate.setFullYear(this.yearMonthDate.year);
        this.monthPickerDate.setMonth(this.yearMonthDate.month);
        this.clearPickerFlag();
        this.isShowMonthPicker = true;
    }

    backDatePicker(type : any) {
        if(type === 'year') {
            this.clearPickerFlag();
            this.getYearMonthDate();
            this.isShowDatePicker = true;
        }
        if(type === 'month') {
            this.clearPickerFlag();
            this.yearMonthDate.year = this.monthPickerDate.getFullYear();
            this.yearMonthDate.month = this.monthPickerDate.getMonth();
            this.getYearMonthDate();
            this.isShowDatePicker = true;
        }
    }

    clearPickerFlag() {
        this.isShowDatePicker = false;
        this.isShowMonthPicker = false;
        this.isShowYearPicker = false;
    }
}



