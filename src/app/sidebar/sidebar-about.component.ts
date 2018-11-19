/**
 * Created by liuxuwen on 18-5-27.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'sidebar-about',
  template: `<div class="side-bar">
                <div class="side-item" [class.selected]="sideItem.isActive" *ngFor="let sideItem of sideTypes" 
                (click)="selectSide(sideItem)">
                {{sideItem.name}}</div>
              </div>`,
  styleUrls:  ['./sidebar.css']
})
export class SidebarAboutComponent implements OnInit {
  @Input() activeSide : string = 'ng-cat';
  sideTypes: any[] = [];
  selectSideName : any = '';

  constructor(private router : Router) {
    this.sideTypes = [{'name':'关于NgCat','label':'ng-cat','isActive':false,'url':'/about'},
      {'name':'快速上手','label':'quickstart','isActive':false,'url':'/quickstart'},
      {'name':'栅格系统','label':'grid','isActive':false,'url':'/grid'}];
  }

  ngOnInit() {
    let activeSidebar = this.sideTypes.find((item) => {return item.label === this.activeSide;});
    if(!activeSidebar) {
      this.sideTypes[0].isActive = true;
    } else {
      activeSidebar.isActive = true;
    }
  }

  selectSide(side : any) {
    for(let sideType of this.sideTypes) {
      if(sideType.isActive) {
        sideType.isActive = false;
        break;
      }
    }
    for(let sideType of this.sideTypes) {
      if(sideType.label === side.label) {
        sideType.isActive = true;
        return this.router.navigate([`/about${sideType.url}`]);
      }
    }
  }
}
