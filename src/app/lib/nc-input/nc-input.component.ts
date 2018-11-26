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
  @Input() width : string = '380px';
  @Input() min : number = 0;
  @Input() max : number = 99;
  @Input() step : number = 1;
  @Input() patternStr : string;
  afixClasses : any = {}
  isShowHint : boolean = false;
  isShowError : boolean = false;
  inputStyle : any = {};

  constructor() {}

  ngOnInit() {
    this.afixClasses = {'input-with-subffix':this.suffixList.length !== 0 && this.prefixList.length === 0,
      'input-with-preffix':this.prefixList.length !== 0,'nc-form-group-item-disabled':this.disabled};
    this.inputStyle = {'width':this.width,'height':this.height};
  }

  inputChange(value : string) {
    this.modelValue = value;
    this.modelValueChange.emit(this.modelValue);
  }
}
