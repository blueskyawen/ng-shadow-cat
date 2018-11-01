/**
 * Created by liuxuwen on 18-5-28.
 */
import { Component,OnInit, AfterViewInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'nc-tab',
  templateUrl: './nc-tab.component.html',
  styleUrls: ['./nc-tab.component.css']
})
export class NcTabComponent implements OnInit, AfterViewInit {
  @Input() tabStyle : string = 'firstTab';
  @Input() type : string = 'card';
  @Input() tabs : any[] = [];
  @Input() selectTab :string;
  @Output() selectTabChange = new EventEmitter();
  @Input() id: string = 'uuidddddd';
  spinClasses : any = {};
  scrollWidth : any = 0;
  tabContainWidth : any = 0;
  tabContainer : any;
  tabsss : any;
  tabOperPrev : any;
  tabOperNext : any;
  offset : any = 0;
  overWidth : any = 0;
  isShowLast : boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let that = this;
    that.getTabDoms();
    that.getTabWidths();
    that.tabOperPrev.addEventListener("click",function() {
      if((that.overWidth + that.offset) <= 0) {
        return;
      }
      if((that.overWidth + that.offset) < 80) {
        that.tabsss.style.marginLeft = "-"+that.overWidth+"px";
        that.offset = 0 - that.overWidth;
        that.tabOperPrev.classList.add("disbaled");
      } else {
        that.offset -= 80;
        that.tabsss.style.marginLeft = that.offset+"px";
        that.tabOperPrev.classList.remove("disbaled");
      }
    },false);
    that.tabOperNext.addEventListener("click",function() {
      if(that.offset >= 0) {
        return;
      }
      if((80 + that.offset) < 0) {
        that.offset += 80;
        that.tabsss.style.marginLeft = that.offset+"px";
        that.tabOperNext.classList.remove("disbaled");
      } else {
        that.tabsss.style.marginLeft = "0px";
        that.offset = 0;
        that.tabOperNext.classList.add("disbaled");
      }
    },false);
    window.addEventListener("resize",function() {
      that.getTabWidths();
    },false);
  }

  getTabWidths() {
    this.scrollWidth = this.tabsss.scrollWidth;
    this.tabContainWidth = this.tabContainer.clientWidth- 40;
    this.overWidth = this.scrollWidth - this.tabContainWidth;
    if(this.overWidth > 0) {
      this.tabOperPrev.style.display = "inline-flex";
      this.tabOperNext.style.display = "inline-flex";
      this.tabsss.style.width = "auto";
      this.isShowLast = true;
    } else {
      this.tabOperPrev.style.display = "none";
      this.tabOperNext.style.display = "none";
      this.tabsss.style.marginLeft = "0px";
      this.tabsss.style.width = "100%";
      this.offset = 0;
      this.isShowLast = false;
    }
  }

  getTabDoms() {
    this.tabContainer = document.getElementById(this.id);
    this.tabsss = document.getElementById(this.id).getElementsByClassName("tab-bars")[0];
    this.tabOperPrev = this.tabContainer.getElementsByClassName("tab-prev")[0];
    this.tabOperNext = this.tabContainer.getElementsByClassName("tab-next")[0];
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
