/**
 * Created by liuxuwen on 18-5-30.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-message',
  templateUrl: './nc-message.component.html',
  styleUrls: ['./nc-message.component.css']
})
export class NcMessageComponent implements OnInit,OnChanges {
  @Input() type : string = 'success';
  @Input() style : string = 'top';
  @Input() timerLen : number = 2000;
  @Input() show : boolean = false;
  @Output() showChange = new EventEmitter();
  @Input() headerTitle : string = '';
  spinClasses : any = {};
  spinClasses2 : any = {};

  constructor() {
  }

  ngOnInit() {
    this.spinClasses = {'success': this.type === 'success','warn':this.type === 'warn',
      'error':this.type === 'error'};
    this.spinClasses2 = {'icon-green': this.type === 'success','icon-yellow':this.type === 'warn',
      'icon-red':this.type === 'error'};
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['show'] && changes['show'].currentValue && this.type === 'success') {
      setTimeout(() => {
        this.cancel();
      },this.timerLen);
    }
  }

  cancel() {
    this.showChange.emit(false);
    this.show = false;
  }

}
