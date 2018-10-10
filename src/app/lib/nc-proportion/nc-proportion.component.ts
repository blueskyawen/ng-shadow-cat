/**
 * Created by liuxuwen on 18-6-5.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-proportion',
  templateUrl: './nc-proportion.component.html',
  styleUrls: ['./nc-proportion.component.css']
})
export class NcProportionComponent  implements OnInit,OnChanges {
  @Input() total : number = 100;
  @Input() value : number = 30;
  valueShow : number = 0;
  @Input() multiple : boolean = false;
  @Input() valueList : any[] = [
    {label: '选项1',color: '#009933',value: 30},
    {label: '选项2',color: '#ffa31a',value: 20},
    {label: '选项3',color: '#ff1a1a',value: 30}
  ];
  colorClass : any = {};
  widthStyle : any = {};
  widthStyle2 : any = {};
  leftValue : number = 0;

  constructor() {}

  ngOnInit() {
    this.valueShow = this.value * 100 / this.total;
    this.colorClass = {'normal-bar': this.valueShow <= 50,
      'warn-bar': this.valueShow > 50 && this.valueShow < 80,
      'urgent-bar': this.valueShow >= 80};
    this.widthStyle = {'width': `${this.valueShow}%`};
    this.leftValue = this.total;
    this.valueList.forEach((item) => {
      this.leftValue -= item.value;
      item.valueShow = item.value * 100 / this.total;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.multiple) {
      setTimeout(() => {this.handleValueChange();},100);
    } else {
      this.leftValue = this.total;
      this.valueList.forEach((item) => {
        this.leftValue -= item.value;
        item.valueShow = item.value * 100 / this.total;
      });
    }
  }

  handleValueChange() {
    this.valueShow = this.value * 100 / this.total;
    this.colorClass = {'normal-bar': this.valueShow <= 50,
      'warn-bar': this.valueShow > 50 && this.valueShow < 80,
      'urgent-bar': this.valueShow >= 80};
    this.widthStyle = {'width': `${this.valueShow}%`};
  }

}
