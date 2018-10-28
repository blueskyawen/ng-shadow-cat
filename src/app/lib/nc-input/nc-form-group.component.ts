/**
 * Created by liuxuwen on 18-10-28.
 */
import { Component,OnInit,Input } from '@angular/core';

@Component({
    selector: 'nc-form-group',
    templateUrl: './nc-form-group.component.html',
    styleUrls: ['./nc-input.component.css']
})
export class NcFormGroupComponent  implements OnInit {
    @Input() width : string = '470px';
    groupStyle : any = {};

    constructor() {}

    ngOnInit() {
        this.groupStyle = {'width': this.width};
    }
}