/**
 * Created by liuxuwen on 19-1-2.
 */
import { Component,OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
    selector: 'nc-time-selector',
    templateUrl: './nc-time-selector.component.html',
    styleUrls: ['./nc-time-selector.component.css','./nc-date-time-selector.component.css']
})
export class NcTimeSelectorComponent implements OnInit,AfterViewInit {
    @Input() type : string = 'single';
    @Input() date : any = {};
    @Output() dateChange = new EventEmitter();
    @Input() disableHours : number[] = [3];
    @Input() disableMinutes : number[] = [];
    @Input() disableSeconds : number[] = [];
    @Input() width : string = '300px';
    @Input() ncFormat : string = 'hh:mm:ss';
    @Input() insert : boolean = false;
    @Input() hideShadow : boolean = false;
    dialogClass : any = {};
    hours : any[] = [];
    minutes : any[] = [];
    seconds : any[] = [];
    @ViewChild('hourCols') hourColEle: ElementRef;
    hourNativeEl : any;
    @ViewChild('minuteCols') minuteColEle: ElementRef;
    minuteNativeEl : any;
    @ViewChild('secondCols') secondColEle: ElementRef;
    secondNativeEl : any;
    selectTime : any = {};
    hourTimer : any;
    minuteTimer : any;
    secondTimer : any;
    oldSelectTime : any = {};
    value : string;
    selectorStyle : any = {};
    isHiddenSelector : boolean = true;
    isOverSelector : boolean = false;
    formatLabel : string;

    constructor() {
    }

    ngOnInit() {
        if(this.type == 'input') {
            document.addEventListener('click', () => {
                if (!this.isOverSelector) {
                    this.isHiddenSelector = true;
                    this.recoverTimeData();
                    this.setTimeValue();
                }
            });
        }
        this.formatLabel = this.ncFormat[2];
        this.selectorStyle = {'width':this.width};
        this.initData();
    }

    ngAfterViewInit() {
        this.initActivePosition();
    }

    initData() {
        this.selectTime = {
            hour: this.date.getHours(),
            minute: this.date.getMinutes(),
            second: this.date.getSeconds(),
        };
        for(let i = 0;i < 24;i++) {
            this.hours.push({value:i,
                disable:this.disableHours.includes(i),
                active:this.selectTime.hour == i});
        }
        for(let i = 0;i < 60;i++) {
            this.minutes.push({value:i,
                disable:this.disableMinutes.includes(i),
                active:this.selectTime.minute == i});
        }
        for(let i = 0;i < 60;i++) {
            this.seconds.push({value:i,
                disable:this.disableSeconds.includes(i),
                active:this.selectTime.second == i});
        }
        this.setTimeValue();
    }

    setTimeValue() {
        if(this.type === 'input') {
            this.value = this.date.getHours() + this.formatLabel + this.date.getMinutes() +
                this.formatLabel + this.date.getSeconds();
        }
    }

    openSelector() {
        if(this.type === 'input') {
            this.isHiddenSelector = false;
            this.setActivePosition();
        }
    }

    closeSelector() {
        if(this.type === 'input') {
            this.isHiddenSelector = true;
        }
    }

    pickTime(type : string,item : any) {
        if(type === 'hour' && !item.disable && !item.active) {
            this.clearItems(this.hours);
            item.active = true;
            this.selectTime.hour = item.value;
            this.scrollHourActivePosition();
        }
        if(type === 'minute' && !item.disable && !item.active) {
            this.clearItems(this.minutes);
            item.active = true;
            this.selectTime.minute = item.value;
            this.scrollMinuteActivePosition();
        }
        if(type === 'second' && !item.disable && !item.active) {
            this.clearItems(this.seconds);
            item.active = true;
            this.selectTime.second = item.value;
            this.scrollSecondActivePosition();
        }
        if(this.insert) {
            this.date.setHours(this.selectTime.hour);
            this.date.setMinutes(this.selectTime.minute);
            this.date.setSeconds(this.selectTime.second);
            this.dateChange.emit(this.date);
        }
    }

    clearItems(items : any[]) {
        items.forEach((item) => {
            if(!item.disable) {
                item.active = false;
            }
        });
    }

    pickTimeOk() {
        this.date.setHours(this.selectTime.hour);
        this.date.setMinutes(this.selectTime.minute);
        this.date.setSeconds(this.selectTime.second);
        this.setTimeValue();
        this.dateChange.emit(this.date);
        this.closeSelector();
    }

    initActivePosition() {
        this.hourNativeEl = this.hourColEle.nativeElement;
        this.minuteNativeEl = this.minuteColEle.nativeElement;
        this.secondNativeEl = this.secondColEle.nativeElement;
        this.oldSelectTime.hour = this.selectTime.hour;
        this.oldSelectTime.minute = this.selectTime.minute;
        this.oldSelectTime.second = this.selectTime.second;
        this.hourNativeEl.scrollTop = this.selectTime.hour * 30;
        this.minuteNativeEl.scrollTop = this.selectTime.minute * 30;
        this.secondNativeEl.scrollTop = this.selectTime.second * 30;
    }

    setActivePosition() {
        this.hourNativeEl.scrollTop = this.selectTime.hour * 30;
        this.minuteNativeEl.scrollTop = this.selectTime.minute * 30;
        this.secondNativeEl.scrollTop = this.selectTime.second * 30;
    }

    scrollHourActivePosition() {
        if(this.selectTime.hour > this.oldSelectTime.hour) {
            this.hourTimer = setInterval(() => {
                this.oldSelectTime.hour++;
                this.hourNativeEl.scrollTop = this.oldSelectTime.hour * 30;
                if(this.selectTime.hour == this.oldSelectTime.hour) {
                    clearInterval(this.hourTimer);
                }
            },50);
        }
        if(this.selectTime.hour < this.oldSelectTime.hour) {
            this.hourTimer = setInterval(() => {
                this.oldSelectTime.hour--;
                this.hourNativeEl.scrollTop = this.oldSelectTime.hour * 30;
                if(this.selectTime.hour == this.oldSelectTime.hour) {
                    clearInterval(this.hourTimer);
                }
            },50);
        }
    }

    scrollMinuteActivePosition() {
        if(this.selectTime.minute > this.oldSelectTime.minute) {
            this.minuteTimer = setInterval(() => {
                this.oldSelectTime.minute++;
                this.minuteNativeEl.scrollTop = this.oldSelectTime.minute * 30;
                if(this.selectTime.minute == this.oldSelectTime.minute) {
                    clearInterval(this.minuteTimer);
                }
            },50);
        }
        if(this.selectTime.minute < this.oldSelectTime.minute) {
            this.minuteTimer = setInterval(() => {
                this.oldSelectTime.minute--;
                this.minuteNativeEl.scrollTop = this.oldSelectTime.minute * 30;
                if(this.selectTime.minute == this.oldSelectTime.minute) {
                    clearInterval(this.minuteTimer);
                }
            },50);
        }
    }

    scrollSecondActivePosition() {
        if(this.selectTime.second > this.oldSelectTime.second) {
            this.secondTimer = setInterval(() => {
                this.oldSelectTime.second++;
                this.secondNativeEl.scrollTop = this.oldSelectTime.second * 30;
                if(this.selectTime.second == this.oldSelectTime.second) {
                    clearInterval(this.secondTimer);
                }
            },50);
        }
        if(this.selectTime.second < this.oldSelectTime.second) {
            this.secondTimer = setInterval(() => {
                this.oldSelectTime.second--;
                this.secondNativeEl.scrollTop = this.oldSelectTime.second * 30;
                if(this.selectTime.second == this.oldSelectTime.second) {
                    clearInterval(this.secondTimer);
                }
            },50);
        }
    }

    recoverTimeData() {
        this.selectTime.hour = this.date.getHours();
        this.selectTime.minute = this.date.getMinutes();
        this.selectTime.second = this.date.getSeconds();
        this.oldSelectTime.hour = this.selectTime.hour;
        this.oldSelectTime.minute = this.selectTime.minute;
        this.oldSelectTime.second = this.selectTime.second;
        this.hours.forEach((item) => {
            if(item.active) {
                item.active = false;
            }
            if(item.value == this.selectTime.hour) {
                item.active = true;
            }
        });
        this.minutes.forEach((item) => {
            if(item.active) {
                item.active = false;
            }
            if(item.value == this.selectTime.minute) {
                item.active = true;
            }
        });
        this.seconds.forEach((item) => {
            if(item.active) {
                item.active = false;
            }
            if(item.value == this.selectTime.second) {
                item.active = true;
            }
        });
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
