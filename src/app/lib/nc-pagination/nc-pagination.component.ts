/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-pagination',
  templateUrl: './nc-pagination.component.html',
  styleUrls: ['./nc-pagination.component.css']
})
export class NcPaginationComponent  implements OnInit {
  @Input() haveBorder : boolean = false;
  @Input() appearNum : number = 6;
  @Input() pageNum : number = 10;
  items : any[] = [];
  curSelectIndex : number = 1;

  constructor() {}

  ngOnInit() {
    for(let index = 0; index < this.appearNum; index++) {
      if(index === 0) {
        this.items.push({label:index + 1,isActive:true});
      } else {
        this.items.push({label:index + 1,isActive:false});
      }
    }
  }

  selectPage(item : any) {
    this.clearActive();
    item.isActive = true;
    this.curSelectIndex = item.label;
  }

  prePage() {
    if(this.items[0].label === 1) {
      return;
    }
    for(let index = 0;index < this.items.length;index++) {
      --this.items[index].label;
    }
    if(this.curSelectIndex < (this.appearNum - 1)) {
      ++this.curSelectIndex;
      this.clearActive();
      this.items[this.curSelectIndex-1].isActive = true;
    }
  }

  nextPage() {
    if(this.items[this.items.length-1].label >= this.pageNum) {
      return;
    }
    for(let index = 0;index < this.items.length;index++) {
      ++this.items[index].label;
    }
    if(this.curSelectIndex > 0) {
      --this.curSelectIndex;
      this.clearActive();
      this.items[this.curSelectIndex-1].isActive = true;
    }
  }

  clearActive() {
    this.items.forEach((item1) => {
      item1.isActive = false;
    });
  }
}
