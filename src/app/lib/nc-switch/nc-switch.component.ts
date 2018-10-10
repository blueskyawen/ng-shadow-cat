/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-switch',
  templateUrl: './nc-switch.component.html',
  styleUrls: ['./nc-switch.component.css']
})
export class NcSwitchComponent  implements OnInit {
  @Input() type : string = 'max';
  @Input() tipLabels : string[] = [];
  @Input() switch : boolean = true;
  @Output() switchChange = new EventEmitter();
  isHasLabel : boolean = false;
  label : string = '';
  placeClasses : any = {}

  constructor() {

  }

  ngOnInit() {
    this.isHasLabel = this.tipLabels.length === 0 ? false : true;
    this.label = this.tipLabels.length === 0 ? '' : this.switch ? this.tipLabels[0] : this.tipLabels[1];
  }

  change() {
    this.switch = !this.switch;
    if(this.switch) {
      this.label = this.tipLabels[0];
    } else {
      this.label = this.tipLabels[1];
    }
    this.switchChange.emit(this.switch);
  }

}
