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
  @Input() style : string = 'normal';
  @Input() operType : string = '';
  @Input() size : string = 'normal';
  @Input() header : string = '操作名称';
  @Input() isShow : boolean = false;
  @Output() isShowChange = new EventEmitter();
  dialogClass : any = {};
  operColor : any = {};

  constructor() {
  }

  ngOnInit() {
    this.dialogClass = {'normal-dialog': this.style === 'normal','confirm-dialog': this.style === 'confirm',
    'big': this.size === 'big'};
    if(this.operType) {
      this.operColor = {'back-blue': this.operType === 'normal','back-red': this.operType === 'delete'};
    }
  }

  close() {
    this.isShow = false;
    this.isShowChange.emit(this.isShow);
  }
}
