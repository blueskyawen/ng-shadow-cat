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
  @Input() type: string = 'normal';
  @Input() size: string = 'big';
  @Input() total: number = 100;
  @Input() value: number = 30;
  @Input() color : string = '#3399ff';
  @Input() subDynamic : boolean = false;
  @Input() subColor : string = '#99d6ff';
  @Input() showInfo : boolean = true;
  @Input() width: string = '420px';
  typeClass : any = {};
  progressStyle : any = {};
  processingStyle : any = {};
  subDyncStyle : any = {};
  valueShow : number = 0;

  constructor() {
  }

  ngOnInit() {
    this.typeClass = {'big': this.size === 'big','medium': this.size === 'medium',
      'small': this.size === 'small','showInfo': this.showInfo};
    this.progressStyle = {'width': this.width};
    if(this.type === 'dynamic') {
      this.value = this.total;
      this.processingStyle = {'width': '100%', 'background': this.color};
      this.subDyncStyle = {'background': this.subColor};
    } else {
      this.valueShow = Math.round(this.value * 100 / this.total);
      this.processingStyle = {'width': `${this.valueShow}%`, 'background': this.color};
      this.subDyncStyle = {'background': this.subColor};
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['value'] && !changes['value'].firstChange) {
      setTimeout(() => {
        this.handleValueChange();
      },20);
    }
  }

  handleValueChange() {
    this.valueShow = Math.round(this.value * 100 / this.total);
    if(this.type === 'normal') {
      this.processingStyle = {'width': `${this.valueShow}%`, 'background': this.color};
    } else {
      this.value = this.total;
    }
  }
}
