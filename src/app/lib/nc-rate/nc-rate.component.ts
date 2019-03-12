/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-rate',
  templateUrl: './nc-rate.component.html',
  styleUrls: ['./nc-rate.component.css']
})
export class NcRateComponent  implements OnInit {
  @Input() totalRate : number = 10;
  @Input() curRate : number = 6;
  @Output() curRateChange = new EventEmitter();
  @Input() title : string = '星';
  @Input() size : string = '28px';
  @Input() color : string = '#ff8000';
  @Input() showTitle: boolean = true;
  rateItems : any[] = [];
  rateClasses : any = {};
  rateStyle : any = {};
  rateStyle2 : any = {};

  constructor() {}

  ngOnInit() {
    for(let i = 0;i < this.totalRate;i++) {
      this.rateItems.push({index: i + 1,checked: false,hovered: false,unhovered: false});
    }
    if(this.curRate > this.totalRate) {
      this.curRate = this.totalRate;
    }
    this.rateStyle = {'font-size': this.size,'color': this.color};
    for(let index = 0;index < this.curRate;index++) {
      this.rateItems[index].checked = true;
    }
  }

  overStarItem(item : any) {
    for(let index = 0;index < this.totalRate;index++) {
      if(index < item.index ) {
        this.rateItems[index].unhovered = false;
        this.rateItems[index].hovered = true;
      } else {
        this.rateItems[index].hovered = false;
        this.rateItems[index].unhovered = true;
      }
    }
  }

  setStarItem(item : any) {
    item.checked = true;
    for(let index = 0;index < item.index;index++) {
      this.rateItems[index].checked = true;
    }
    for(let index2 = item.index;index2 < this.totalRate;index2++) {
      this.rateItems[index2].checked = false;
    }
    for(let i = 0;i < this.totalRate;i++) {
      this.rateItems[i].hovered = false;
      this.rateItems[i].unhovered = false;
    }
    this.curRate = item.index;
    this.curRateChange.emit(this.curRate);
  }

  outRating() {
    for(let i = 0;i < this.totalRate;i++) {
      this.rateItems[i].hovered = false;
      this.rateItems[i].unhovered = false;
      console.log('outRating');
    }
  }
}
