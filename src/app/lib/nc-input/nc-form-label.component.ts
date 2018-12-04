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
    @Input() noShowRequire : boolean = false;
    @Input() noShowOption : boolean = false;
    labelStyle : any = {};
    labelClass : any = {};

    constructor() {}

    ngOnInit() {
        this.labelClass = {'nc-form-noshow-option':this.noShowOption};
        this.labelStyle = {'height':this.height};
    }
}