/**
 * Created by liuxuwen on 18-11-26.
 */
import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'nc-text-area',
    templateUrl: './nc-textarea.component.html',
    styleUrls: ['./nc-input.component.css']
})
export class NcTextAreaComponent implements OnInit {
    @Input() modelValue : string = '';
    @Output() modelValueChange = new EventEmitter();
    @Input() placeHolder : string = '请输入';
    @Input() height : string = '80px';
    @Input() width : string = '100%';
    inputStyle : any = {};

    constructor() {}

    ngOnInit() {
        this.inputStyle = {'width':this.width,'height':this.height};
    }

    inputChange(value : string) {
        this.modelValue = value;
        this.modelValueChange.emit(this.modelValue);
    }
}