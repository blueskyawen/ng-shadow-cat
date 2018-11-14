/**
 * Created by liuxuwen on 18-11-14.
 */
import { Component,OnInit,Input} from '@angular/core';

@Component({
    selector: 'nc-msg-eif',
    templateUrl: './nc-msg-eif.component.html',
    styleUrls: ['./nc-msg-eif.component.css']
})
export class NcMsgEifComponent implements OnInit {
    @Input() type : string = 'laugh';
    @Input() isAnimate : boolean = false;
    eifClasses : any = {};

    constructor() {
    }

    ngOnInit() {
        this.eifClasses = {'nc-bubble-laugh': this.type === 'laugh','nc-bubble-serious':this.type === 'serious',
            'nc-bubble-aggrieve':this.type === 'aggrieve','nc-bubble-angry':this.type === 'angry',
            'nc-bubble-love':this.type === 'love','nc-bubble-animate':this.isAnimate};
    }

}