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
  @Input() starNum : number = 5;
  @Input() star : number = 2;
  @Output() starChange = new EventEmitter();
  @Input() title : string = '星';
  starItems : any[] = [];
  placeClasses : any = {}

  constructor() {}

  ngOnInit() {
    for(let i=0;i < this.starNum;i++) {
      if(i < this.star) {
        this.starItems.push({index: i + 1,checked: true});
      } else {
        this.starItems.push({index: i + 1,checked: false});
      }
    }
    this.lightStars(this.star);
  }

  lightStars(num : any) {
    for(let i=num;i < this.starNum;i++) {
      this.starItems[i].checked = false;
    }
    for(let i=0;i < num;i++) {
      this.starItems[i].checked = true;
    }
  }

  overStar(item : any) {
    this.lightStars(item.index);
  }

  setStar(item : any) {
    this.star = item.index;
    this.starChange.emit(this.star);
  }

  ok() {
    this.lightStars(this.star);
  }
}
