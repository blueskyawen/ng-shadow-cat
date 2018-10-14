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
    for(let sOption of this.sourceOptions) {
      if(sOption.checked) {
        return this.toTargetActive = true;
      }
    }
    this.toTargetActive = false;
  }

  checkTargOption(option : any) {
    option.checked = !option.checked;
    this.checkToSourceActive();
  }

  checkToSourceActive() {
    for(let tOption of this.targetOptions) {
      if(tOption.checked) {
        return this.toSourceActive = true;
      }
    }
    this.toSourceActive = false;
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
    for(let tOption of this.targetOptions) {
      if(tOption.checked) {
        this.sourceOptions.push({label:tOption.label,value:tOption.value,disable:false});
      }
    }
    this.targetOptions = this.targetOptions.filter(option => {return !option.checked;})
    this.toSourceActive = false;
    this.targetOptionsChange.emit(this.targetOptions);
  }

  sourceToTarget() {
    for(let sOption of this.sourceOptions) {
      if(sOption.checked) {
        this.targetOptions.push({label:sOption.label,value:sOption.value});
      }
    }
    this.sourceOptions = this.sourceOptions.filter(option => {return !option.checked;})
    this.toTargetActive = false;
    this.targetOptionsChange.emit(this.targetOptions);
  }

}
