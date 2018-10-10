/**
 * Created by liuxuwen on 18-8-22.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-label',
  templateUrl: './nc-label.component.html',
  styleUrls: ['./nc-label.component.css']
})
export class NcLabelComponent  implements OnInit {
  @Input() type : string = 'default';
  @Input() title : string = '默认标签';
  colorClasses : any = {};

  constructor() {}

  ngOnInit() {
    this.colorClasses = {'label-default': this.type === 'default','label-primary': this.type === 'primary',
      'label-success': this.type === 'success','label-info': this.type === 'info',
      'label-warning': this.type === 'warn','label-danger': this.type === 'danger'};
  }
}
