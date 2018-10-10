/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-panel',
  templateUrl: './nc-panel.component.html',
  styleUrls: ['./nc-collapse.component.css']
})
export class NcPanelComponent implements OnInit {
  @Input() header : string = 'header';
  @Input() isActive : boolean = false;
  @Input() isDisable : boolean = false;
  @Output() isActiveChange = new EventEmitter();

  constructor() {}

  ngOnInit() {

  }

  checkIt() {
    if(this.isDisable) {
      return;
    }
    this.isActive = !this.isActive;
    this.isActiveChange.emit(this.isActive );
  }
}
