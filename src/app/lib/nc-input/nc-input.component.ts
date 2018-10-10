/**
 * Created by liuxuwen on 18-6-22.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-input',
  templateUrl: './nc-input.component.html',
  styleUrls: ['./nc-input.component.css']
})
export class NcInputComponent  implements OnInit {
  @Input() modelValue : string = '';
  @Output() modelValueChange = new EventEmitter();
  @Input() required : boolean = false;
  @Input() placeHolder : string = '请输入';
  @Input() disabled : boolean = false;
  @Input() type : string = 'text';
  @Input() prefixList : any[] = []; //前缀
  @Input() suffixList : any[] = []; //后缀单位
  @Input() isSearch : boolean = false;
  @Input() readon : boolean = false;
  @Input() width : string = '260px';
  @Input() min : number = 0;
  @Input() max : number = 0;
  @Input() patternStr : string;
  placeClasses : any = {}

  constructor() {}

  ngOnInit() {

  }

  inputChange(value : string) {
    this.modelValue = value;
    this.modelValueChange.emit(this.modelValue);
  }
}
