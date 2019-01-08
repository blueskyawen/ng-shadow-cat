/**
 * Created by liuxuwen on 18-8-19.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-dropdown',
  templateUrl: './nc-dropdown.component.html',
  styleUrls: ['./nc-dropdown.component.css']
})
export class NcDropdownComponent  implements OnInit {
  @Input() type : string = 'click';
  @Input() place : string = 'down';
  isOverIt : boolean = false;
  items : any[] = [];
  placeClasses : any = {};
  isShow : boolean = false;

  constructor() {}

  ngOnInit() {
    this.placeClasses = {'nc-dropPlace-down': this.place === 'down','nc-dropPlace-up':this.place === 'top',
      'nc-dropPlace-left':this.place === 'left','nc-dropPlace-right':this.place === 'right'};
    if(this.type == 'click') {
      document.addEventListener('click', (event) => {
        if (!this.isOverIt) {
          this.isShow = false;
        }
        event.stopPropagation();
      });
    }
  }

  clickDown() {
    this.isShow = !this.isShow;
  }

  moveInDown() {
    this.isOverIt = true;
    if(this.type === 'hover') {
      this.isShow = true;
    }
  }

  moveOutDown() {
    this.isOverIt = false;
    if(this.type === 'hover') {
      this.isShow = false;
    }
  }
}
