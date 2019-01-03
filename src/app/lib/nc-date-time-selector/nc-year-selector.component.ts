import { Component,OnInit,Input,Output,EventEmitter,ViewChild,ElementRef,AfterViewInit } from '@angular/core';

@Component({
    selector: 'nc-year-selector',
    templateUrl: './nc-year-selector.component.html',
    styleUrls: ['./nc-year-selector.component.css']
})
export class NcTimeSelectorComponent implements OnInit,AfterViewInit {
    @Input() type : string = 'single';
    @Input() date : any = {};
    @Output() dateChange = new EventEmitter();
    @Input() disableHours : number[] = [3];
    @Input() disableMinutes : number[] = [];
    @Input() disableSeconds : number[] = [];
    @Input() width : string = '300px';
    dialogClass : any = {};
    hours : any[] = [];
    minutes : any[] = [];
    seconds : any[] = [];
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

    constructor() {
    }

    ngOnInit() {
    }
}
