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
  @Input() total: number = 100;
  @Input() value: number = 30;
  @Output() valueChange = new EventEmitter();
  @Input() disable : boolean = false;
  beforeStyle : any = {};
  anniuStyle : any = {};
  afterStyle : any = {};

  constructor() {
  }

  ngOnInit() {
    this.setRang(this.value);
  }

  rangeChange(value : number) {
    setTimeout(() => {
      this.setRang(value);
    },50);
  }

  setRang(value : number) {
    this.value = value;
    this.beforeStyle = {'width': `${this.value * 500 / this.total}px`};
    this.anniuStyle = {'left': `${this.value * 500 / this.total}px`};
    this.afterStyle = {'width': `${500 - this.value * 500 / this.total}px`};
    this.valueChange.emit(this.value);
  }

}
