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
  @Input() height: number;
  @Input() style: string = 'big';
  @Input() total: number = 100;
  @Input() value: number = 30;
  @Input() isDynamic : boolean = false;
  @Input() isSubDynamic : boolean = true;
  @Input() dynaTimelen : number = 10;
  @Input() showProcValue : boolean = true;
  valueShow : number = 0;
  sizeClass : any = {};
  colorClass : any = {};
  widthStyle : any = {};
  progStyleStr : any;
  proceConStyle : any = {};
  intvalTime : number = 0;
  subDynStyle: any = {};

  constructor() {
  }

  ngOnInit() {
    this.isSubDynamic = this.isDynamic && this.isSubDynamic;
    this.sizeClass = {'big': this.style !== 'small','small': this.style === 'small'};
    if(this.isDynamic) {
      this.colorClass = {'normal': this.isDynamic,'dyna': this.isDynamic};
      this.widthStyle = this.style !== 'small' ? {'animation': `mydyna ${this.dynaTimelen}s`} :
          {'animation': `mydyna3 ${this.dynaTimelen}s`};
      this.subDynStyle = this.isSubDynamic ? {'animation': 'mydyna2 500ms infinite'} : {};
      this.value = 0;
      this.total = 100;
      this.intvalTime = this.dynaTimelen * 1000 / 5;
      this.setDynamicValue();
    } else {
      this.colorClass = {'normal': this.valueShow <= 50,
        'warn': this.valueShow > 50 && this.valueShow < 80,
        'urgent': this.valueShow >= 80,
        'percent100': this.valueShow == 100};
      this.widthStyle = {'width': `${this.valueShow}%`};
    }
    this.valueShow = this.value * 100 / this.total;
    let sizeHeight = !isNaN(this.height) && Number(this.height) > 1 ? Number(this.height) :
        (this.style === 'big' || this.style === 'small') ? undefined : 12;
    this.progStyleStr = sizeHeight ? {'width': this.width, 'height': sizeHeight+'px'} :
        {'width': this.width};
    if (!this.showProcValue) { this.proceConStyle = {'width': '100%'}; }
  }

  setDynamicValue() {
    if(this.showProcValue) {
      setTimeout(() => {
        this.value += 20;
        this.handleValueChange();
        if(this.value < this.total) {
          this.setDynamicValue();
        } else {
          this.subDynStyle = this.style !== 'small' ? {'border-radius': '12px'} : {'border-radius': '6px'};
        }
      }, this.intvalTime * 80 / 100);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['value'] && changes['value'].currentValue) {
      setTimeout(() => {
        if(this.showProcValue) {
          this.handleValueChange();
        }
      },50);
    }
  }

  handleValueChange() {
    this.valueShow = this.value * 100 / this.total;
    if(!this.isDynamic) {
      this.colorClass = {'normal': !this.isDynamic && this.valueShow <= 50,
        'warn': !this.isDynamic && (this.valueShow > 50 && this.valueShow < 80),
        'urgent': !this.isDynamic && this.valueShow >= 80,
        'percent100': !this.isDynamic && this.valueShow == 100};
    }
    this.widthStyle['width'] = `${this.valueShow}%`;
  }
}
