/**
 * Created by liuxuwen on 18-6-12.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-mutil-select',
  templateUrl: './nc-mutil-select.component.html',
  styleUrls: ['./nc-mutil-select.component.css']
})
export class NcMutilSelectComponent  implements OnInit {
  @Input() isDisable: boolean = false;
  @Input() options: any[] = [];
  @Input() selections: any[] = [];
  @Output() selectionsChange = new EventEmitter();
  @Input() hasheckbox : boolean = false;
  @Input() allcheck : boolean = false;
  @Input() showCheckNum : boolean = false;
  isContentOpen: boolean = false;
  isMoveInSelect: boolean = false;
  isMoveInContent : boolean = false;
  isMoveInDel : boolean = false;
  isAllSelected : boolean = false;

  constructor() {
    document.addEventListener('click', () => {
      if (this.isContentOpen && !this.isMoveInSelect) {
        this.isContentOpen = false;
      }
      this.isMoveInDel = false;
    });
  }

  ngOnInit() {
    for(let option of this.options) {
      let index = this.selections.findIndex(item => {return item.value === option.value;});
      option.isChecked = index !== -1 ? true : false;
    }
    for(let selection of this.selections) {
      let index2 = this.options.findIndex(item => {return item.value === selection.value;});
      selection.disable = this.options[index2].disable;
    }
    this.isAllSelected = this.options.length === this.selections.length;
  }

  moveOn() {
    this.isMoveInSelect = true;
  }

  moveOut() {
    this.isMoveInSelect = false;
  }

  moveContent() {
    this.isMoveInContent = !this.isMoveInContent;
  }

  moveInDel() {
    this.isMoveInDel = !this.isMoveInDel;
  }

  clickSelect() {
    if(this.isDisable) {
      return;
    }
    if(!this.isMoveInContent && !this.isMoveInDel) {
      this.isContentOpen = !this.isContentOpen;
    }
  }

  selectOption(option : any,checked ?: boolean) {
    if(option.disable) {
      return;
    }
    if(!this.isAllSelected) {
      option.isChecked = !option.isChecked;
    } else {
      option.isChecked = checked;
    }
    if(option.isChecked) {
      this.addOption(option);
    } else {
      this.deleteOption(option);
    }
    this.selectionsChange.emit(this.selections);
  }

  addOption(option : any) {
    let index = this.selections.findIndex(item => {return item.value === option.value;});
    if(index === -1) {
      this.selections.push({label:option.label,value: option.value,disable:option.disable});
    }
  }

  deleteOption(option : any) {
    let index = this.selections.findIndex(item => {return item.value === option.value;});
    if(index !== -1) {
      this.selections.splice(index,1);
    }
    let index2 = this.options.findIndex(item => {return item.value === option.value;});
    if(index2 !== -1) {
      this.options[index2].isChecked = false;
    }
  }

  delOption(option : any) {
    if(this.isDisable || option.disable) {
      return;
    }
    option.isChecked = false;
    this.deleteOption(option);
    this.selectionsChange.emit(this.selections);
  }

  selectAll() {
    this.isAllSelected = !this.isAllSelected;
    for(let option of this.options) {
      this.selectOption(option,this.isAllSelected);
    }
  }
}
