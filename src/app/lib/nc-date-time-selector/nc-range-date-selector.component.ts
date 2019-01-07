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
            day:1,
            date:new Date
        },
        {
            year: 2019,
            month: 1,
            day:1,
            date:new Date
        }
    ];

    @Input() insert : boolean = false;
    @Input() hideShadow : boolean = false;
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;
    isDisableOk : boolean = false;
    timePickDayTitle : string[] = [];
    isShowDatePicker : boolean = true;
    rangeSelectorStyle : any = {};

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
            document.addEventListener('click', () => {
                if (!this.isOverSelector) {
                    this.isHiddenSelector = true;
                    this.recoverData();
                }
            });
        }
    }

    getFormat() {
        this.dateFormat = this.ncFormat.split(' ')[0].charAt(4);
        this.timeFormat = this.ncFormat.split(' ')[1].charAt(2);
    }

    setStyleAndClass() {
        this.selectorStyle = {'width':this.width};
        this.rangeSelectorStyle = {'width':(Number(this.width.split('px')[0]) * 2 + 50) + 'px'};
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
        this.saveDateInfo(startMonthDate,this.yearMonthDateRange[0]);
        this.saveDateInfo(endMonthDate,this.yearMonthDateRange[1]);
        this.saveCurDateInfo(startMonthDate,this.curDateRange[0]);
        this.saveCurDateInfo(endMonthDate,this.curDateRange[1]);
        for(let i=0;i < 2;i++) {
            this.getYearMonthDate(this.yearMonthDateRange[i]);
        }
        this.setDateValue();
    }

    saveDateInfo(sourDate : any,targDate : any) {
        targDate.year = sourDate.getFullYear();
        targDate.month = sourDate.getMonth();
        targDate.day = sourDate.getDate();
    }

    saveCurDateInfo(sourDate : any,targDate : any) {
        targDate.year = sourDate.getFullYear();
        targDate.month = sourDate.getMonth();
        targDate.day = sourDate.getDate();
        targDate.date.setFullYear(targDate.year);
        targDate.date.setMonth(targDate.month);
        targDate.date.setDate(targDate.day);
        targDate.date.setHours(sourDate.getHours());
        targDate.date.setMinutes(sourDate.getMinutes());
        targDate.date.setSeconds(sourDate.getSeconds());
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
        if(this.compareDate(selectedDate,this.curDateRange[0]) == 1) {
            this.curDateRange[0].year = selectedDate.year;
            this.curDateRange[0].month = selectedDate.month;
            this.curDateRange[0].day = selectedDate.day;
            this.setYearMonthDate();
            this.isDisableOk = false;
        } else if(this.compareDate(selectedDate,this.curDateRange[1]) == 2) {
            this.curDateRange[1].year = selectedDate.year;
            this.curDateRange[1].month = selectedDate.month;
            this.curDateRange[1].day = selectedDate.day;
            this.setYearMonthDate();
            this.isDisableOk = false;
        } else {
            this.curDateRange[0].year = selectedDate.year;
            this.curDateRange[0].month = selectedDate.month;
            this.curDateRange[0].day = selectedDate.day;
            this.curDateRange[1].year = 0;
            this.curDateRange[1].month = 0;
            this.curDateRange[1].day = 0;
            this.setYearMonthDate();
            this.isDisableOk = true;

        }
    }

    clearDateRange() {
        this.yearMonthDateRange.forEach((dateRange) => {
            dateRange.dayDatas = null;
        });
    }

    setYearMonthDate() {
        this.yearMonthDateRange.forEach((dateRange) => {
            dateRange.dayDatas.forEach((day) => {
                if(!day.disable) {
                    let tmpDate = {year:dateRange.year,month:dateRange.month,day:day.date};
                    if(this.isDateActive(tmpDate)) {
                        day.active = true;
                    } else if(this.isDateInSelectedRange(tmpDate)) {
                        day.rangeSelect = true;
                        day.active = false;
                    } else {
                        day.active = false;
                        day.rangeSelect = false;
                    }
                }
            });
        });
    }

    setDateValue() {
        if(this.type === 'input') {
            this.value = this.formatValue(this.dateRange[0].getFullYear()) + this.dateFormat +
                this.formatValue(this.dateRange[0].getMonth()+1) + this.dateFormat +
                this.formatValue(this.dateRange[0].getDate()) + ' ' +
                this.dateRange[0].toString().split(' ')[4].split(':').join(this.timeFormat) + ' ~ ' +
                this.formatValue(this.dateRange[1].getFullYear()) + this.dateFormat +
                this.formatValue(this.dateRange[1].getMonth()+1) + this.dateFormat +
                this.formatValue(this.dateRange[1].getDate()) + ' ' +
                this.dateRange[1].toString().split(' ')[4].split(':').join(this.timeFormat);
        }
    }

    formatValue(value : number) {
        return value < 10 ? '0'+value : value.toString();
    }

    pickOk() {
        if(this.isDisableOk) {
            return;
        }
        for(let index = 0;index < this.curDateRange.length;index++) {
            this.dateRange[index].setFullYear(this.curDateRange[index].year);
            this.dateRange[index].setMonth(this.curDateRange[index].month);
            this.dateRange[index].setDate(this.curDateRange[index].day);
            this.dateRange[index].setHours(this.curDateRange[index].date.getHours());
            this.dateRange[index].setMinutes(this.curDateRange[index].date.getMinutes());
            this.dateRange[index].setSeconds(this.curDateRange[index].date.getSeconds());
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

    recoverData() {
        this.saveDateInfo(this.dateRange[0],this.yearMonthDateRange[0]);
        this.saveDateInfo(this.dateRange[1],this.yearMonthDateRange[1]);
        this.saveCurDateInfo(this.dateRange[0],this.curDateRange[0]);
        this.saveCurDateInfo(this.dateRange[1],this.curDateRange[1]);
        this.clearDateRange();
        for(let i=0;i < 2;i++) {
            this.getYearMonthDate(this.yearMonthDateRange[i]);
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

