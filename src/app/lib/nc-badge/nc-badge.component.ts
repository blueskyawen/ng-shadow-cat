/**
 * Created by liuxuwen on 18-11-12.
 */
import { Component,OnInit,Input } from '@angular/core';

@Component({
    selector: 'nc-badge',
    templateUrl: './nc-badge.component.html',
    styleUrls: ['./nc-badge.component.css']
})
export class NcBadgeComponent  implements OnInit {
    @Input() count : number = 5;
    @Input() maxCount : number = 99;
    @Input() type : string = 'success';
    @Input() width : string = '30px';
    @Input() height : string = '30px';
    @Input() isShowNum : boolean = true;
    countText : string = '5';
    colorClasses : any = {};
    badgeStyle : any = {};

    constructor() {}

    ngOnInit() {
        this.colorClasses = {'nc-badge-info': this.type === 'default','nc-badge-success':this.type === 'success',
            'nc-badge-warning':this.type === 'warn','nc-badge-danger':this.type === 'error'};
        this.countText = this.count <= this.maxCount ? `${this.count}` : `${this.maxCount}+`;
        this.badgeStyle = {'width': this.width,'height': this.height};
    }
}