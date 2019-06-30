/**
 * Created by liuxuwen on 18-6-4.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-rangeslide',
  templateUrl: './nc-rangeslide.component.html',
  styleUrls: ['./nc-rangeslide.component.css']
})
export class NcRangeSlideComponent  implements OnInit {
  @Input() width: number;
  @Input() total: number = 100;
  @Input() value: number = 30;
  @Output() valueChange = new EventEmitter();
  @Input() disable : boolean = false;
  isPercent : boolean = true;
  beforeStyle : any = {};
  anniuStyle : any = {};
  afterStyle : any = {};
  slideStyle : any = {};

  constructor() {
  }

  ngOnInit() {
    this.isPercent = !this.width;
    this.setRang(this.value);
  }

  rangeChange(value : number) {
    setTimeout(() => {
      this.setRang(value);
    },50);
  }

  setRang(value : number) {
    this.value = value;
    this.slideStyle = {'width': this.isPercent ? '100%' : `${this.width}px`};
    this.beforeStyle = {'width': this.isPercent ? `${this.value * 100 / this.total}%` : `${this.value * this.width / this.total}px`};
    this.anniuStyle = {'left': this.isPercent ? `${this.value * 100 / this.total}%` : `${this.value * this.width / this.total}px`};
    this.afterStyle = {'width': this.isPercent ?
          `${100 - this.value * 100 / this.total}%` : `${this.width - this.value * this.width / this.total}px`};
    this.valueChange.emit(this.value);
  }

}
