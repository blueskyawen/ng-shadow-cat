/**
 * Created by liuxuwen on 18-12-23.
 */
import { Component,OnInit, Input } from '@angular/core';

@Component({
    selector: 'nc-list-group-vertical',
    templateUrl: './nc-list-group-vertical.component.html',
    styleUrls: ['./nc-list-group.component.css']
})
export class NcListGroupVerticalComponent implements OnInit {
    @Input() scroll : boolean = false;
    spinClasses : any = {};

    constructor() {
    }

    ngOnInit() {
    }
}