/**
 * Created by liuxuwen on 18-6-2.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-tooltip',
  templateUrl: './nc-tooltip.component.html',
  styleUrls: ['./nc-tooltip.component.css']
})
export class NcToolTipComponent  implements OnInit {
  @Input() tipTitle : string = 'tipTitle';
  @Input() tipContext : string = 'tipContext';
  @Input() place : string = 'right';
  placeClasses : any = {};

  constructor() {}

  ngOnInit() {
    this.placeClasses = {'place-top': this.place === 'top','place-left':this.place === 'left',
      'place-right':this.place === 'right','place-bottom':this.place === 'bottom'};
  }
}
