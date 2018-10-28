/**
 * Created by liuxuwen on 18-8-21.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-alert',
  templateUrl: './nc-alert.component.html',
  styleUrls: ['./nc-alert.component.css']
})
export class NcAlertComponent  implements OnInit {
  @Input() type : string = 'success';
  @Input() callback : any;
  @Input() title : string = '成功！很好地完成了提交!';
  @Input() width : string = '500px';
  colorClasses : any = {};
  alertStyle : any = {};

  constructor() {}

  ngOnInit() {
    this.colorClasses = {'alert-success': this.type === 'success','alert-info':this.type === 'info',
      'alert-warning':this.type === 'warn','alert-danger':this.type === 'danger'};
    this.alertStyle = {'width': this.width};
  }

  clickit() {
    if(this.callback) {
      (this.callback)();
    }
  }
}
