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
    selectedDateRange = [
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
    formatLabel : string;

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
        this.selectedDateRange[0].year = this.yearMonthDateRange[0].year;
        this.selectedDateRange[0].month = this.yearMonthDateRange[0].month;
        this.selectedDateRange[0].day = this.yearMonthDateRange[0].day;
        this.selectedDateRange[1].year = this.yearMonthDateRange[1].year;
        this.selectedDateRange[1].month = this.yearMonthDateRange[1].month;
        this.selectedDateRange[1].day = this.yearMonthDateRange[1].day;
        for(let i=0;i < 2;i++) {
            this.getYearMonthDate(this.yearMonthDateRange[i],this.selectedDateRange[i]);
        }
    }

    getYearMonthDate(yearMonthDate : any,selectedYearMonthDate : any) {
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
                "today": false
            });
        }
        //本月
        for (let i = 0;i < lastDateOfCurMonth_date;i++) {
            if(yearMonthDate.year === selectedYearMonthDate.year && yearMonthDate.month === selectedYearMonthDate.month
                && selectedYearMonthDate.day == i + 1) {
                tmpDays.push({
                    "date": i + 1,
                    "active": true,
                    "disable": false,
                    "today": false
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
        yearMonthDate.dayDatas = tmpDays;
    }

    prevPage() {
        this.curYear--;
    }

    nextPage() {
        this.curYear++;
    }

    clearItems() {
    }

    selectDay(item : any) {

    }

    pickYear() {

    }

    pickMonth() {

    }

    pickOk() {

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
}

