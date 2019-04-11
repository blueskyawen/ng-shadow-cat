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
  @Input() subPlace : string = 'left';
  isOverIt : boolean = false;
  items : any[] = [];
  placeClasses : any = {};
  isShow : boolean = false;

  constructor() {}

  ngOnInit() {
    this.setPlaceClasses();
    if(this.type == 'click') {
      document.addEventListener('click', (event) => {
        if (!this.isOverIt) {
          this.isShow = false;
        }
        event.stopPropagation();
      });
    }
  }

  setPlaceClasses() {
    this.placeClasses = {'nc-dropPlace-down': this.place === 'down','nc-dropPlace-up':this.place === 'top',
      'nc-dropPlace-left':this.place === 'left','nc-dropPlace-right':this.place === 'right',
      'nc-subPlace-left':this.isShowSubPlace('left', ['down','top']),
      'nc-subPlace-right':this.isShowSubPlace('right', ['down','top']),
      'nc-subPlace-up':this.isShowSubPlace('top', ['left','right']),
      'nc-subPlace-down':this.isShowSubPlace('down', ['left','right'])
    };
  }

  isShowSubPlace(place: string, placeItems: string[]) {
    return placeItems.includes(this.place) && this.subPlace === place;
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
