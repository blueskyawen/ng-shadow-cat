/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-radio',
  templateUrl: './nc-radio.component.html',
  styleUrls: ['./nc-radio.component.css']
})
export class NcRadioComponent  implements OnInit {
  @Input() checked : boolean = false;
  @Output() checkedChange = new EventEmitter();
  @Input() disabled : boolean = false;

  constructor() {}

  ngOnInit() {
  }

  checkItem() {
    if(this.disabled) {
      return;
    }
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
}
