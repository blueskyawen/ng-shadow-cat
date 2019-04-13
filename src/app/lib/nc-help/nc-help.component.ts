/**
 * Created by liuxuwen on 18-6-2.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-help',
  templateUrl: './nc-help.component.html',
  styleUrls: ['./nc-help.component.css']
})
export class NcHelpComponent  implements OnInit {
  @Input() type : string = '?';
  @Input() style : string = 'default';
  @Input() title : string = 'i am help!';
  @Input() place : string = 'right';
  colorClasses : any = {};
  placeClasses : any = {};

  constructor() {}

  ngOnInit() {
    this.colorClasses = {'normal-help': this.style === 'normal','warn-help':this.style === 'warn',
      'error-help':this.style === 'error','default-help':this.style === 'default'};
    this.placeClasses = {'place-top': this.place === 'top','place-left':this.place === 'left',
      'place-right':this.place === 'right','place-bottom':this.place === 'bottom'};

  }
}
