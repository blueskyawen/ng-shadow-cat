/**
 * Created by liuxuwen on 18-6-5.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-dialog',
  templateUrl: './nc-dialog.component.html',
  styleUrls: ['./nc-dialog.component.css']
})
export class NcDialogComponent implements OnInit {
  @Input() type : string = 'normal';
  @Input() zIndex : number = 9000;
  @Input() header : string = '操作名称';
  @Input() top: string = '80px';
  @Input() width: string = '';
  @Input() isShow : boolean = false;
  @Output() isShowChange = new EventEmitter();
  shadeStyle : any = {};
  dialogStyle : any = {};

  constructor() {
  }

  ngOnInit() {
    this.shadeStyle = {'z-index': this.zIndex};
    if (this.width) {
      this.dialogStyle = {'top': this.top, 'z-index': this.zIndex + 1, 'width': this.width};
    } else {
      this.dialogStyle = {'top': this.top, 'z-index': this.zIndex + 1};
    }
  }

  close() {
    this.isShow = false;
    this.isShowChange.emit(this.isShow);
  }
}
