/**
 * Created by liuxuwen on 18-5-28.
 */
import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'nc-loading',
  templateUrl: './nc-loading.component.html',
  styleUrls: ['./nc-loading.component.css']
})
export class NcLoadingComponent implements OnInit {
  @Input() type : string = 'normal';
  @Input() loadSize : string = 'max';
  spinClasses : any = {};

  constructor() {
  }

  ngOnInit() {
    this.spinClasses = {'max-loading': this.loadSize === 'max','medium-loading': this.loadSize === 'medium',
      'min-loading': this.loadSize === 'min'};
  }
}
