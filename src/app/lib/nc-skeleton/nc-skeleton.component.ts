/**
 * Created by liuxuwen on 18-11-14.
 */
import { Component,OnInit,Input} from '@angular/core';

@Component({
    selector: 'nc-skeleton',
    templateUrl: './nc-skeleton.component.html',
    styleUrls: ['./nc-skeleton.component.css']
})
export class NcSkeletonComponent implements OnInit {
    @Input() widths : string[] = ['40%','100%','100%','70%'];
    @Input() itemNum : number = 4;
    skeItems : any[] = [];

    constructor() {}

    ngOnInit() {
        for(let index = 0;index < this.itemNum;index++) {
            this.skeItems.push(1);
        }
        if(this.widths.length > this.itemNum) {
            this.widths = this.widths.slice(0,this.itemNum);
        }
        if(this.widths.length < this.itemNum) {
            for(let index2 = this.widths.length;index2 < this.itemNum;index2++) {
                this.widths[index2] = this.widths[this.widths.length - 1];
            }
        }
    }
}