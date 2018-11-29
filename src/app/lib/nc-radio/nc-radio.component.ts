/**
 * Created by liuxuwen on 18-6-3.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-radio',
  templateUrl: './nc-radio.component.html',
  styleUrls: ['./nc-radio.component.css']
})
export class NcRadioComponent implements OnInit {
  @Input() options : any[] = [];
  @Input() value : any;
  @Output() valueChange = new EventEmitter();
  isDisable : boolean = false;

  constructor() {}

  ngOnInit() {
    this.options.forEach((option) => {
      option.checked = false;
    });
    if(this.value) {
      for(let option of this.options) {
        if(option.value === this.value) {
          option.checked = true;
          this.isDisable = option.disabled;
          break;
        }
      }
    }
  }

  checkItem(item : any) {
    if(item.disabled || this.isDisable) {
      return;
    }
    this.clearOptions();
    item.checked = true;
    this.valueChange.emit(item.value);
  }

  clearOptions() {
    this.options.forEach((option) => {
      option.checked = false;
    });
  }

}
