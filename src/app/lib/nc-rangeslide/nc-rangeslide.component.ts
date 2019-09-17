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
  @Input() width: string;
  @Input() total: number = 100;
  @Input() value: number = 30;
  @Output() valueChange = new EventEmitter();
  @Input() disable : boolean = false;
  @Input() withTitle: boolean = false;
  beforeStyle : any = {};
  anniuStyle : any = {};
  afterStyle : any = {};
  slideStyle: any = {};

  constructor() {
  }

  ngOnInit() {
    this.slideStyle = {'width': this.width ? this.width : '100%'};
    this.setRang();
  }

  rangeChange(value : any) {
    setTimeout(() => {
      this.value = +value;
      this.setRang();
      this.valueChange.emit(this.value);
    },10);
  }

  setRang() {
    this.beforeStyle = {'width': `${this.value * 100 / this.total}%`};
    this.anniuStyle = {'left': `${this.value * 100 / this.total}%`};
    this.afterStyle = {'width': `${100 - this.value * 100 / this.total}%`};
  }

}
