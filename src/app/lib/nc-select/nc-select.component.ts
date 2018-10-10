/**
 * Created by liuxuwen on 18-6-11.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-select',
  templateUrl: './nc-select.component.html',
  styleUrls: ['./nc-select.component.css']
})
export class NcSelectComponent  implements OnInit {
  @Input() isDisable : boolean = false;
  @Input() options: any[] = [];
  @Input() value : number = 0;
  @Output() valueChange = new EventEmitter();
  @Input() width : string = '420px';
  @Input() height : string = '36px';
  isContentOpen : boolean = false;
  isMoveInSelect  : boolean  = false;
  selectedOption : any = {};

  constructor() {
    document.addEventListener('click', () => {
      console.log("addEventListener");
      if(this.isContentOpen && !this.isMoveInSelect) {
        this.isContentOpen = false;
      }
    });
  }

  ngOnInit() {
  }

  getSelectOption() {
    for(let option of this.options) {
      if(option.value === this.value) {
        return option;
      }
    }
    return {};
  }

  moveOn() {
    this.isMoveInSelect = !this.isMoveInSelect;
  }

  clickSelect() {
    if(this.isDisable) {
      return;
    }
    this.isContentOpen = !this.isContentOpen;
  }

  selectOption(option : any,event : any) {
    if(option.disable) {
      return;
    }
    this.isContentOpen = false;
    this.value = option.value;
    this.valueChange.emit(this.value);
    event.stopPropagation();
  }
}
