/**
 * Created by liuxuwen on 18-6-4.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-progress',
  templateUrl: './nc-progress.component.html',
  styleUrls: ['./nc-progress.component.css']
})
export class NcProgressComponent  implements OnInit,OnChanges {
  @Input() width: string = '360px';
  @Input() style: string = 'big';
  @Input() total: number = 100;
  @Input() value: number = 30;
  @Input() isDynamic : boolean = false;
  valueShow : number = 0;
  sizeClass : any = {};
  colorClass : any = {};
  widthStyle : any = {};
  progStyleStr : any;

  constructor() {
  }

  ngOnInit() {
    this.valueShow = this.value * 100 / this.total;
    this.sizeClass = {'big': this.style === 'big','small': this.style === 'small'};
    this.colorClass = {'normal': !this.isDynamic && this.valueShow <= 50,
      'warn': !this.isDynamic && (this.valueShow > 50 && this.valueShow < 80),
      'urgent': !this.isDynamic && this.valueShow >= 80,
      'percent100': !this.isDynamic && this.valueShow == 100
    };
    this.progStyleStr = {'width': this.width};
    this.widthStyle = {'width': `${this.valueShow}%`};
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['value'] && changes['value'].currentValue) {
      setTimeout(() => {
        this.handleValueChange();
      },50);
    }
  }

  handleValueChange() {
    this.valueShow = this.value * 100 / this.total;
    if(this.isDynamic) {
      this.colorClass = {'normal': this.isDynamic,'dyna': this.isDynamic};
    } else {
      this.colorClass = {'normal': !this.isDynamic && this.valueShow <= 50,
        'warn': !this.isDynamic && (this.valueShow > 50 && this.valueShow < 80),
        'urgent': !this.isDynamic && this.valueShow >= 80,
        'percent100': !this.isDynamic && this.valueShow == 100};
    }
    this.widthStyle = {'width': `${this.valueShow}%`};
  }
}
