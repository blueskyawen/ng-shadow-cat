/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-checkbox',
  templateUrl: './nc-checkbox.component.html',
  styleUrls: ['./nc-checkbox.component.css']
})
export class NcCheckboxComponent  implements OnInit {
  @Input() checked : number = 0;
  @Output() checkedChange = new EventEmitter();
  @Input() disabled : boolean = false;

  constructor() {}

  ngOnInit() {

  }

  checkItem() {
    if(this.disabled) {
      return;
    }
    if(this.checked === 0) {
      this.checked = 2;
    } else if(this.checked === 1) {
      this.checked = 0;
    } else if(this.checked === 2) {
      this.checked = 1;
    }
    this.checkedChange.emit(this.checked);
  }
}
