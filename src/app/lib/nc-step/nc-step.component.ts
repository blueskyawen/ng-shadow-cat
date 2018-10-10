/**
 * Created by liuxuwen on 18-6-7.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-step',
  templateUrl: './nc-step.component.html',
  styleUrls: ['./nc-step.component.css']
})
export class NcStepComponent  implements OnInit {
  @Input() type: string = 'underline';
  @Input() stepItems: any[] = [];
  @Input() stepIndex : number = 0;
  @Output() stepIndexChange = new EventEmitter();
  stepClass: any = {};

  constructor() {
  }

  ngOnInit() {
    for(let i = 0;i < this.stepItems.length;i++) {
      this.stepItems[i].dataContent = i + 1;
    }
  }

  onClickStep(index : number) {
    this.stepIndex = index;
    this.stepIndexChange.emit(this.stepIndex);
  }

}
