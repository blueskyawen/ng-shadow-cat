/**
 * Created by liuxuwen on 18-10-31.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'nc-pager',
    templateUrl: './nc-pager.component.html',
    styleUrls: ['./nc-pager.component.css']
})
export class NcPagerComponent implements OnInit {
    @Input() place : string = 'start';
    @Input() titles : any[] = [{title:'Prev',callback: () => {}},
                                {title:'Next',callback: () => {}}];
    pagerClasses : any = {};

    constructor() {
    }

    ngOnInit() {
        this.pagerClasses = {'nc-content-start':this.place === 'start','nc-content-center':this.place === 'center',
            'nc-content-space-between':this.place === 'between','nc-content-end':this.place === 'end'};
    }
}