/**
 * Created by liuxuwen on 18-8-21.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'sidebar-pattern',
  template: `<div class="side-bar">
                <div class="side-item" [class.selected]="sideItem.isActive" *ngFor="let sideItem of sideTypes" 
                (click)="selectSide(sideItem)">
                {{sideItem.name}}</div>
              </div>`,
  styleUrls:  ['./sidebar.css']
})
export class SidebarPatternComponent implements OnInit {
  @Input() activeSide : string = 'pageheader';
  sideTypes: any[] = [];
  selectSideName : any = '';

  constructor(private router : Router) {
    this.sideTypes = [//{'name':'导航','label':'navbar','isActive':false,'url':'/navbar'},
      {'name':'页面标题','label':'pageheader','isActive':false,'url':'/pageHeader'},
      {'name':'缩略图','label':'thumbnail','isActive':false,'url':'/thumbimg'},
      {'name':'列表组','label':'listGroup','isActive':false,'url':'/listGroup'},
      {'name':'卡片','label':'card','isActive':false,'url':'/card'},
      {'name':'页面布局','label':'flexLayout','isActive':false,'url':'/flexLayout'},
      {'name':'导航菜单','label':'menu','isActive':false,'url':'/menu'},
      //{'name':'锚点书签','label':'affix','isActive':false,'url':'/affix'},
      {'name':'表单','label':'form','isActive':false,'url':'/form'},
      {'name':'表单实例','label':'formInstance','isActive':false,'url':'/formInstance'}];
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
        return this.router.navigate([`/pattern${sideType.url}`]);
      }
    }
  }
}
