/**
 * Created by liuxuwen on 18-10-28.
 */
import { Component,OnInit,Input } from '@angular/core';

@Component({
    selector: 'nc-form-label',
    templateUrl: './nc-form-label.component.html',
    styleUrls: ['./nc-input.component.css']
})
export class NcFormLabelComponent implements OnInit {
    @Input() height : string = '36px';
    @Input() required : boolean = false;
    labelStyle : any = {};

    constructor() {}

    ngOnInit() {
        this.labelStyle = {'height':this.height};
    }
}