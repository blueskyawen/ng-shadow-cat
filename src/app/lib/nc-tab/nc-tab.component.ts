/**
 * Created by liuxuwen on 18-5-28.
 */
import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'nc-tab',
  templateUrl: './nc-tab.component.html',
  styleUrls: ['./nc-tab.component.css']
})
export class NcTabComponent implements OnInit {
  @Input() tabStyle : string = 'firstTab';
  @Input() type : string = 'card';
  @Input() tabs : any[] = [];
  @Input() selectTab :string;
  @Output() selectTabChange = new EventEmitter();
  spinClasses : any = {};

  constructor() {
  }

  ngOnInit() {
  }

  select(tab : any) {
    if(tab.isDisable) {
      return;
    }
    this.tabs.forEach((tabz) => {
      if(tabz.isActive) {
        tabz.isActive = false;
      }
    });
    tab.isActive = true;
    //this.selectTab = tab.label;
    this.selectTabChange.emit(tab.label);
  }
}
