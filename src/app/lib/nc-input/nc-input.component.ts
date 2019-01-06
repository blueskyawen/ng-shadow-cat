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
  @Input() autofocus : boolean = false;
  @Input() height : string = '36px';
  @Input() width : string = '100%';
  @Input() min : number = 0;
  @Input() max : number = 99;
  @Input() step : number = 1;
  @Input() inputLintText : string = '请输入中文或者英文';
  @Input() inputErrorText : string = '输入错误，请检查！';
  @Input() pattern : any;
  @Input() showHint : boolean = true;
  @Input() iconffix : string = '';
  errorText : string = '';
  afixClasses : any = {};
  isShowHint : boolean = false;
  isShowError : boolean = false;
  inputStyle : any = {};
  inputClasses : any = {}

  constructor() {}

  ngOnInit() {
    this.afixClasses = {'nc-form-group-item-disabled':this.disabled};
    this.inputStyle = {'width':this.width,'height':this.height};
    this.inputClasses = {'hasSuffix':this.suffixList.length !== 0,'hasPrefix':this.prefixList.length !== 0,
      'hasSubIcon':this.iconffix === 'sub','hasPreIcon':this.iconffix === 'pre'};
  }

  inputChange(value : string) {
    this.modelValue = value;
    this.modelValueChange.emit(this.modelValue);
  }

  focusInput() {
    this.isShowHint = true;
  }

  blurInput() {
    this.isShowHint = false;
    if(this.required && !this.modelValue) {
      this.errorText = '必填，不能为空！';
      return this.isShowError = true;
    }
    if(this.pattern && !this.pattern.test(this.modelValue)) {
      this.errorText = this.inputErrorText;
      return this.isShowError = true;
    }
    return this.isShowError = false;
  }
}
