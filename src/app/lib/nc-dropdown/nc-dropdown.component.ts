/**
 * Created by liuxuwen on 18-8-19.
 */
/**
 * Created by liuxuwen on 18-6-2.
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
  @Input() title : string = '下拉菜单';
  @Input() divider : boolean = false;
  @Input() options : any[] = [];
  items : any[] = [];
  placeClasses : any = {};
  isShow : boolean = false;

  constructor() {}

  ngOnInit() {
    this.options.forEach((option) => {
      if(option.divider) {
        this.items.push({name:'',divider:true});
      }
      if(option.children && option.children.length > 0) {
        this.items.push({name:option.name,subTitle:true});
        option.children.forEach((child) => {
          this.items.push({name:child.name,disable:child.disable,callback:child.callback});
        });
      } else {
        this.items.push({name:option.name,disable:option.disable,callback:option.callback});
      }
      if(option.divider) {
        this.items.push({name:'',divider:true});
      }
    });
    this.placeClasses = {'dropup': this.place === 'up','dropright':this.place === 'right',
      'dropleft':this.place === 'left'};
  }

  clickItem(item : any) {
    if(item.disable) {return;}
    (item.callback)();
  }

  clickDown() {
    if(this.type === 'click') {
      this.isShow = !this.isShow;
    }
  }

  moveInDown() {
    if(this.type === 'hover') {
      this.isShow = true;
    }
  }

  moveOutDown() {
    if(this.type === 'hover') {
      this.isShow = false;
    }
  }
}
