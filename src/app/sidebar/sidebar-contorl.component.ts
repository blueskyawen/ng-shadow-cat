/**
 * Created by liuxuwen on 18-5-27.
 */
import { Component, Input, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'sidebar-contorl',
  template: `<div class="side-bar">
                <div class="side-item" [class.selected]="sideItem.isActive" *ngFor="let sideItem of sideTypes" 
                (click)="selectSide(sideItem)">
                {{sideItem.name}}</div>
              </div>`,
  styleUrls:  ['./sidebar.css']
})
export class SidebarContorlComponent implements OnInit {
  sideTypes: any[] = [];

  constructor(private router : Router) {
    this.sideTypes = [{'name':'加载等待','label':'loading','isActive':true,'url':'/loading'},
      {'name':'TAB页','label':'tab','isActive':false,'url':'/tab'},
      {'name':'按钮','label':'button','isActive':false,'url':'/button'},
      {'name':'通知','label':'message','isActive':false,'url':'/message'},
      {'name':'回到顶端','label':'backtoTop','isActive':false,'url':'/toTop'},
      {'name':'提示工具','label':'toolTip','isActive':false,'url':'/toolTip'},
      {'name':'帮助','label':'help','isActive':false,'url':'/help'},
      {'name':'面包屑','label':'breadcrumb','isActive':false,'url':'/breadcrumb'},
      {'name':'分页条','label':'pagination','isActive':false,'url':'/pagination'},
      {'name':'单选框','label':'radio','isActive':false,'url':'/radio'},
      {'name':'多选框','label':'checkbox','isActive':false,'url':'/checkbox'},
      {'name':'开关','label':'switch','isActive':false,'url':'/switch'},
      {'name':'评分条','label':'rate','isActive':false,'url':'/rate'},
      {'name':'折叠面板','label':'collapse','isActive':false,'url':'/collapse'},
      {'name':'滑动输入','label':'rangeslide','isActive':false,'url':'/rangeslide'},
      {'name':'进度条','label':'progress','isActive':false,'url':'/progress'},
      {'name':'比例条','label':'proportion','isActive':false,'url':'/proportion'},
      {'name':'模态框','label':'dialog','isActive':false,'url':'/dialog'},
      {'name':'步骤条','label':'step','isActive':false,'url':'/step'},
      {'name':'单项选择器','label':'select','isActive':false,'url':'/select'},
      {'name':'多项选择器','label':'mutilselect','isActive':false,'url':'/mutilselect'},
      {'name':'轮播','label':'carousel','isActive':false,'url':'/carousel'},
      {'name':'穿梭选择框','label':'transfer','isActive':false,'url':'/transfer'},
      //{'name':'树型控件','label':'tree','isActive':false,'url':'/tree'},
      {'name':'文本输入框','label':'input','isActive':false,'url':'/input'},
      {'name':'下拉菜单','label':'dropdown','isActive':false,'url':'/dropdown'},
      {'name':'标签','label':'label','isActive':false,'url':'/label'},
      {'name':'告警','label':'alert','isActive':false,'url':'/alert'},
      {'name':'翻页','label':'pager','isActive':false,'url':'/pager'}];
  }

  ngOnInit() {
    //this.sideTypes[0].isActive = true;
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
        return this.router.navigate([`/components${sideType.url}`]);
      }
    }
  }
}
