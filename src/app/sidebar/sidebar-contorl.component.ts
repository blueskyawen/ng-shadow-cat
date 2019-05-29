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
  @Input() activeSide : string = 'loading';
  sideTypes: any[] = [];

  constructor(private router : Router) {
    this.sideTypes = [{'name':'加载等待','label':'loading','isActive':false,'url':'/loading'},
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
      {'name':'输入框','label':'input','isActive':false,'url':'/input'},
      {'name':'数字输入框','label':'numberInput','isActive':false,'url':'/numberInput'},
      {'name':'柱状图','label':'barchart','isActive':false,'url':'/barchart'},
      {'name':'饼/环状图','label':'piechart','isActive':false,'url':'/piechart'},
      {'name':'年份选择器','label':'yearSelector','isActive':false,'url':'/yearSelector'},
      {'name':'月份选择器','label':'monthSelector','isActive':false,'url':'/monthSelector'},
      {'name':'时间选择器','label':'timeSelector','isActive':false,'url':'/timeSelector'},
      {'name':'日期选择器','label':'dateSelector','isActive':false,'url':'/dateSelector'},
      {'name':'日期时间选择器','label':'datetimeSelector','isActive':false,'url':'/datetimeSelector'},
      {'name':'日期范围选择器','label':'rangedateSelector','isActive':false,'url':'/rangedateSelector'},
      {'name':'下拉菜单','label':'dropdown','isActive':false,'url':'/dropdown'},
      {'name':'抽屉','label':'drawer','isActive':false,'url':'/drawer'},
      {'name':'标签','label':'label','isActive':false,'url':'/label'},
      {'name':'告警','label':'alert','isActive':false,'url':'/alert'},
      {'name':'翻页','label':'pager','isActive':false,'url':'/pager'},
      {'name':'徽章','label':'badge','isActive':false,'url':'/badge'},
      {'name':'头像','label':'avater','isActive':false,'url':'/avater'},
      {'name':'消息表情','label':'msgEif','isActive':false,'url':'/msgEif'},
      {'name':'加载占位','label':'skeleton','isActive':false,'url':'/skeleton'},
      {'name':'展示台','label':'exhibit','isActive':false,'url':'/exhibit'}];
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
        return this.router.navigate([`/components${sideType.url}`]);
      }
    }
  }
}
