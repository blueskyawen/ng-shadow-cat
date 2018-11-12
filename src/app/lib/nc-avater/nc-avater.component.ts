/**
 * Created by liuxuwen on 18-11-12.
 */
import { Component,OnInit,Input } from '@angular/core';

@Component({
    selector: 'nc-avater',
    templateUrl: './nc-avater.component.html',
    styleUrls: ['./nc-avater.component.css']
})
export class NcAvaterComponent  implements OnInit {
    @Input() size : string = 'large';
    @Input() type : string = 'square';
    @Input() imgSrc : string = '';
    @Input() isShowBadge : boolean = false;
    avaterClasses : any = {};
    bagClasses : any = {};

    constructor() {}

    ngOnInit() {
        this.avaterClasses = {'nc-avater-square':this.type === 'square','nc-avater-circle':this.type === 'circle',
            'nc-avater-lg': this.size === 'large','nc-avater-md':this.size === 'middle',
            'nc-avater-sm':this.size === 'small'};
        this.bagClasses = {'nc-count-square':this.type === 'square','nc-count-circle':this.type === 'circle'};
    }
}