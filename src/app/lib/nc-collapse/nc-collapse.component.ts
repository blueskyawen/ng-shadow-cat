/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-collapse',
  templateUrl: './nc-collapse.component.html',
  styleUrls: ['./nc-collapse.component.css']
})
export class NcCollapseComponent implements  OnInit {
  @Input() width : string = '800px';
  collapseStyle : any = {};

  constructor() {}

  ngOnInit() {
    this.collapseStyle = {'width': this.width};
  }
}
