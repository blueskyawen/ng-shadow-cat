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
  @Input() curIndex : number = 1;
  @Output() curIndexChange = new EventEmitter<number>();
  items : any[] = [];
  minNum: number;
  maxNum: number;

  constructor() {}

  ngOnInit() {
    for(let index = 0; index < this.appearNum; index++) {
      this.items.push({label: index + this.curIndex,
        isActive: (index + this.curIndex) === this.curIndex});
    }
    this.minNum = this.curIndex;
    this.maxNum = this.curIndex + this.appearNum - 1;
  }

  selectPage(item : any) {
    this.curIndex = item.label;
    this.curIndexChange.emit(this.curIndex);
  }

  prePage() {
    if(this.curIndex === 1) {
      return;
    }
    if(this.curIndex === this.minNum) {
      this.curIndex--;
      this.minNum = this.curIndex;
      this.maxNum--;
      for(let index = 0;index < this.appearNum;index++) {
        --this.items[index].label;
      }
    } else {
      this.curIndex--;
    }
  }

  nextPage() {
    if(this.curIndex === this.pageNum) {
      return;
    }
    if(this.curIndex === this.maxNum) {
      this.curIndex++;
      this.maxNum = this.curIndex;
      this.minNum++;
      for(let index = 0;index < this.appearNum;index++) {
        ++this.items[index].label;
      }
    } else {
      this.curIndex++;
    }
  }

}
