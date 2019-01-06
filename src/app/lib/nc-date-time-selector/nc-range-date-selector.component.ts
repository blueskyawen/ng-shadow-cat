import { Component,OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
    selector: 'nc-range-date-selector',
    templateUrl: './nc-range-date-selector.component.html',
    styleUrls: ['./nc-range-date-selector.component.css','./nc-date-time-selector.component.css']
})
export class NcRangeDateSelectorComponent implements OnInit {
    @Input() type : string = 'single';
    @Input() dateRange : any[] = [];
    @Output() dateRangeChange = new EventEmitter();
    @Input() ncFormat : string = 'yyyy/mm/dd hh:mm:ss';
    @Input() width : string = '300px';
    dateFormat : string = '/';
    timeFormat : string = ':';
    weeks = ['日','一','二','三','四','五','六'];
    yearMonthDateRange : any[] = [
        {
            year: 2019,
            month: 0,
            day:1,
            dayDatas: []
        },
        {
            year: 2019,
            month: 1,
            day:1,
            dayDatas: []
        }
    ];
    curDateRange = [
        {
            year: 2019,
            month: 0,
            day:1
        },
        {
            year: 2019,
            month: 1,
            day:1
        }
    ];

    @Input() insert : boolean = false;
    @Input() hideShadow : boolean = false;
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;
    curYear : any;
    isDisableOk : boolean = false;
    timePickDayTitle : string[] = [];
    isShowDatePicker : boolean = true;

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
        this.dateFormat = this.ncFormat.split(' ')[0].charAt(4);
        this.timeFormat = this.ncFormat.split(' ')[1].charAt(2);
        this.selectorStyle = {'width':this.width};
        this.initData();
    }

    initData() {
        let startMonthDate : any;
        let endMonthDate : any;
        if(this.dateRange.length !== 2) {
            startMonthDate = new Date();
            endMonthDate = new Date();
            endMonthDate.setMonth(startMonthDate.getMonth() + 1);
        } else {
            if(this.dateRange[0] < this.dateRange[1]) {
                startMonthDate = this.dateRange[0];
                endMonthDate = this.dateRange[1];
            } else {
                startMonthDate = this.dateRange[1];
                endMonthDate = this.dateRange[0];
            }
        }
        this.dateRange[0] = startMonthDate;
        this.dateRange[1] = endMonthDate;
        this.yearMonthDateRange[0].year = startMonthDate.getFullYear();
        this.yearMonthDateRange[0].month = startMonthDate.getMonth();
        this.yearMonthDateRange[0].day = startMonthDate.getDate();
        this.yearMonthDateRange[1].year = endMonthDate.getFullYear();
        this.yearMonthDateRange[1].month = endMonthDate.getMonth();
        this.yearMonthDateRange[1].day = endMonthDate.getDate();
        this.curDateRange[0].year = this.yearMonthDateRange[0].year;
        this.curDateRange[0].month = this.yearMonthDateRange[0].month;
        this.curDateRange[0].day = this.yearMonthDateRange[0].day;
        this.curDateRange[1].year = this.yearMonthDateRange[1].year;
        this.curDateRange[1].month = this.yearMonthDateRange[1].month;
        this.curDateRange[1].day = this.yearMonthDateRange[1].day;
        for(let i=0;i < 2;i++) {
            this.getYearMonthDate(this.yearMonthDateRange[i]);
        }
        this.setDateValue();
    }

    getYearMonthDate(yearMonthDate : any) {
        let tmpDays = [];
        //获取该月第一天为星期几
        let firstDateOfCurMonth = new Date(yearMonthDate.year, yearMonthDate.month, 1);
        let firstDateOfCurMonth_day = firstDateOfCurMonth.getDay();
        //获取该月最后一天的日期
        let lastDateOfCurMonth = new Date(yearMonthDate.year, yearMonthDate.month + 1, 0);
        let lastDateOfCurMonth_date = lastDateOfCurMonth.getDate();
        //获取上一个月最后一天的日期
        let lastDateOfPrevMonth = new Date(yearMonthDate.year, yearMonthDate.month, 0);
        let lastDateOfPrevMonth_date = lastDateOfPrevMonth.getDate();
        //上个月
        for (let i = 0;i < firstDateOfCurMonth_day;i++) {
            tmpDays.unshift({
                "date": lastDateOfPrevMonth_date - i,
                "active": false,
                "disable": true,
                "rangeSelect": false
            });
        }
        //本月
        for (let i = 0;i < lastDateOfCurMonth_date;i++) {
            let tmpDate = {year:yearMonthDate.year,month:yearMonthDate.month,day:i + 1};
            if(this.isDateActive(tmpDate)) {
                tmpDays.push({
                    "date": i + 1,
                    "active": true,
                    "disable": false,
                    "rangeSelect": false
                });
            } else if(this.isDateInSelectedRange(tmpDate)) {
                tmpDays.push({
                    "date": i + 1,
                    "active": false,
                    "disable": false,
                    "rangeSelect": true
                });
            } else {
                tmpDays.push({
                    "date": i + 1,
                    "active": false,
                    "disable": false,
                    "rangeSelect": false
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
                "rangeSelect": false
            });
        }
        yearMonthDate.dayDatas = tmpDays;
    }

    isDateActive(date : any) {
        return this.compareDate(date,this.curDateRange[0]) === 0 || this.compareDate(date,this.curDateRange[1]) === 0;
    }

    isDateInSelectedRange(date : any) {
        return this.compareDate(date,this.curDateRange[0]) === 2 && this.compareDate(date,this.curDateRange[1]) === 1;
    }

    compareDate(date1 : any,date2 : any) {
        if(date1.year === date2.year && date1.month === date2.month && date1.day === date2.day) {
            return 0;
        }
        if(date1.year < date2.year || (date1.year === date2.year && date1.month < date2.month)
            || (date1.year === date2.year && date1.month === date2.month && date1.day < date2.day)) {
            return 1;
        } else {
            return 2;
        }
    }

    prevPage() {
        this.yearMonthDateRange[1] = this.yearMonthDateRange[0];
        this.yearMonthDateRange[0] = {
            year: this.yearMonthDateRange[1].month == 0 ? this.yearMonthDateRange[1].year - 1 : this.yearMonthDateRange[1].year,
            month: this.yearMonthDateRange[1].month == 0 ? 11 : this.yearMonthDateRange[1].month - 1,
            day:this.yearMonthDateRange[1].day,
            dayDatas: []
        };
        this.getYearMonthDate(this.yearMonthDateRange[0]);
    }

    nextPage() {
        this.yearMonthDateRange[0] = this.yearMonthDateRange[1];
        this.yearMonthDateRange[1] = {
            year: this.yearMonthDateRange[0].month == 11 ? this.yearMonthDateRange[1].year + 1 : this.yearMonthDateRange[1].year,
            month: this.yearMonthDateRange[0].month == 11 ? 0 : this.yearMonthDateRange[1].month + 1,
            day:this.yearMonthDateRange[0].day,
            dayDatas: []
        };
        this.getYearMonthDate(this.yearMonthDateRange[1]);
    }

    selectDay(item : any,index : any) {
        if(item.disable) {
            return;
        }
        let selectedDate = {
            year:this.yearMonthDateRange[index].year,
            month:this.yearMonthDateRange[index].month,
            day:item.date};
        this.clearItems(this.yearMonthDateRange[0].dayDatas);
        this.clearItems(this.yearMonthDateRange[1].dayDatas);
        if(this.compareDate(selectedDate,this.curDateRange[0]) == 1) {
            this.curDateRange[0].year = selectedDate.year;
            this.curDateRange[0].month = selectedDate.month;
            this.curDateRange[0].day = selectedDate.day;
            this.getYearMonthDate(this.yearMonthDateRange[0]);
            this.getYearMonthDate(this.yearMonthDateRange[1]);
            this.isDisableOk = false;
        } else if(this.compareDate(selectedDate,this.curDateRange[1]) == 2) {
            this.curDateRange[1].year = selectedDate.year;
            this.curDateRange[1].month = selectedDate.month;
            this.curDateRange[1].day = selectedDate.day;
            this.getYearMonthDate(this.yearMonthDateRange[0]);
            this.getYearMonthDate(this.yearMonthDateRange[1]);
            this.isDisableOk = false;
        } else {
            this.curDateRange[0].year = selectedDate.year;
            this.curDateRange[0].month = selectedDate.month;
            this.curDateRange[0].day = selectedDate.day;
            this.curDateRange[1].year = 0;
            this.curDateRange[1].month = 0;
            this.curDateRange[1].day = 0;
            this.getYearMonthDate(this.yearMonthDateRange[0]);
            this.getYearMonthDate(this.yearMonthDateRange[1]);
            this.isDisableOk = true;

        }
    }

    clearItems(dayDatas : any[]) {
        dayDatas.forEach((item) => {
            if(!item.disable) {
                item.active = false;
                item.rangeSelect = false;
            }
        });
    }

    setDateValue() {
        if(this.type === 'input') {
            this.value = this.dateRange[0].getFullYear() + this.dateFormat + (this.dateRange[0].getMonth() + 1) + this.dateFormat
                + this.dateRange[0].getDate() + ' ' + this.dateRange[0].getHours() + this.timeFormat + this.dateRange[0].getMinutes() +
                this.timeFormat + this.dateRange[0].getSeconds() + ' ~ ' + this.dateRange[1].getFullYear() + this.dateFormat +
                (this.dateRange[1].getMonth() + 1) + this.dateFormat + this.dateRange[1].getDate() + ' ' +
                this.dateRange[1].getHours() + this.timeFormat + this.dateRange[1].getMinutes() +
                this.timeFormat + this.dateRange[1].getSeconds();
        }
    }

    pickOk() {
        if(this.isDisableOk) {
            return;
        }
        for(let index = 0;index < this.curDateRange.length;index++) {
            this.dateRange[index].setFullYear(this.curDateRange[index].year);
            this.dateRange[index].setMonth(this.curDateRange[index].month);
            this.dateRange[index].setDate(this.curDateRange[index].day);
        }
        this.checkOrExchangeDate();
        this.setDateValue();
        this.dateRangeChange.emit(this.dateRange);
        this.closeSelector();
    }

    checkOrExchangeDate() {
        if(this.dateRange[0] > this.dateRange[1]) {
            this.dateRange.reverse();
        }
    }

     /*backDatePicker(date : any,type : any) {
        if(type === 'year') {
            this.clearPickerFlag(date);
            //this.getYearMonthDate();
            date.isShowDatePicker = true;
        }
        if(type === 'month') {
            this.clearPickerFlag(date);
            //this.yearMonthDate.year = this.monthPickerDate.getFullYear();
            //this.yearMonthDate.month = this.monthPickerDate.getMonth();
            //this.getYearMonthDate();
            date.isShowDatePicker = true;
        }
    }

    clearPickerFlag(date : any) {
        date.isShowDatePicker = false;
        date.isShowMonthPicker = false;
        date.isShowYearPicker = false;
    }*/

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

    pickDateOrTime() {
        this.getTimePickDayTitle();
        this.isShowDatePicker = !this.isShowDatePicker;
    }

    getPickTitle() {
        return this.isShowDatePicker ? '选择时间' : '选择日期';
    }

    getTimePickDayTitle() {
        this.timePickDayTitle[0] = this.curDateRange[0].year + '年 ' + (this.curDateRange[0].month+1) +
            '月 ' + this.curDateRange[0].day + '日';
        this.timePickDayTitle[1] = this.curDateRange[1].year + '年 ' + (this.curDateRange[1].month+1) +
            '月 ' + this.curDateRange[1].day + '日';
    }
}

