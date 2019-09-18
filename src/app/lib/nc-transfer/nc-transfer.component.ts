/**
 * Created by liuxuwen on 18-6-19.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-transfer',
  templateUrl: './nc-transfer.component.html',
  styleUrls: ['./nc-transfer.component.css']
})
export class NcTransferComponent implements OnInit {
  @Input() sourceOptions : any[] = [];
  @Input() targetOptions : any[] = [];
  @Output() targetOptionsChange = new EventEmitter();
  @Input() height : string = '260px';
  @Input() width : string = '500px';
  toTargetActive : boolean = false;
  toSourceActive : boolean = false;
  allTargetChecked : boolean = false;
  allSourceChecked : boolean = false;
  containSTyle : any;
  checkedResourItems : any[] = [];
  checkedTargItems : any[] = [];

  constructor() {
  }

  ngOnInit() {
    for(let sOption of this.sourceOptions) {
      sOption.checked = false;
    }
    for(let tOption of this.targetOptions) {
      tOption.checked = false;
    }
    this.containSTyle = {'height':this.height,'width' :this.width};
  }

  checkAllSource() {
    this.allSourceChecked = !this.allSourceChecked;
    for(let sOption of this.sourceOptions) {
      if(!sOption.disable) {
        sOption.checked = this.allSourceChecked;
      }
    }
    this.checkToTargetActive();
  }

  checkSourOption(option : any) {
    if(option.disable) {
      return;
    }
    option.checked = !option.checked;
    this.checkToTargetActive();
  }

  checkToTargetActive() {
    let availItems = this.sourceOptions.filter(item => {
      return !item.disable;
    });
    this.checkedResourItems = availItems.filter(item => {
      return item.checked;
    });
    this.toTargetActive = this.checkedResourItems.length !== 0;
    this.allSourceChecked = availItems.length === this.checkedResourItems.length;
  }

  checkTargOption(option : any) {
    option.checked = !option.checked;
    this.checkToSourceActive();
  }

  checkToSourceActive() {
    this.checkedTargItems = this.targetOptions.filter(item => {
      return item.checked;
    });
    this.toSourceActive = this.checkedTargItems.length !== 0;
    this.allTargetChecked = this.checkedTargItems.length === this.targetOptions.length;
  }

  checkAllTarget() {
    this.allTargetChecked = !this.allTargetChecked;
    for(let tOption of this.targetOptions) {
      if(!tOption.disable) {
        tOption.checked = this.allTargetChecked;
      }
    }
    this.checkToSourceActive();
  }

  getSourceCheckedNum() {
    let tempOptions = this.sourceOptions.filter(option => {return option.checked;})
    return tempOptions.length;
  }

  getTargetCheckedNum() {
    let tempOptions = this.targetOptions.filter(option => {return option.checked;})
    return tempOptions.length;
  }

  targetToSource() {
    this.targetOptions = this.targetOptions.filter(option => {return !option.checked;})
    for(let tOption of this.checkedTargItems) {
      this.sourceOptions.push({label:tOption.label,value:tOption.value,disable:false});
    }
    this.toSourceActive = false;
    this.allTargetChecked = false;
    this.targetOptionsChange.emit(this.targetOptions);
  }

  sourceToTarget() {
    this.sourceOptions = this.sourceOptions.filter(option => {return !option.checked;})
    for(let sOption of this.checkedResourItems) {
      this.targetOptions.push({label:sOption.label,value:sOption.value});
    }
    this.toTargetActive = false;
    this.allSourceChecked = false;
    this.targetOptionsChange.emit(this.targetOptions);
  }

}
