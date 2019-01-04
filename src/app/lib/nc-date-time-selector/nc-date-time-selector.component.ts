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
    @Input() date : any;
    @Output() dateChange = new EventEmitter();
    @Input() width : string = '300px';
    @Input() ncFormat : string = 'yyyy/mm/dd';


    constructor() {
    }

    ngOnInit() {
    }

}

