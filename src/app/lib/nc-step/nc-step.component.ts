/**
 * Created by liuxuwen on 18-6-7.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges,AfterViewInit } from '@angular/core';

@Component({
  selector: 'nc-step',
  templateUrl: './nc-step.component.html',
  styleUrls: ['./nc-step.component.css']
})
export class NcStepComponent  implements OnInit, AfterViewInit {
  @Input() type: string = 'underline';
  @Input() stepItems: any[] = [];
  @Input() stepIndex : number = 0;
  @Output() stepIndexChange = new EventEmitter();
  @Input() id: string;
  stepClass: any = {};
  scrollWidth : any = 0;
  stepContainWidth : any = 0;
  stepContainer : any;
  stepss : any;
  stepOperPrev : any;
  stepOperNext : any;
  offset : any = 0;
  overWidth : any = 0;

  constructor() {
  }

  ngOnInit() {
    for(let i = 0;i < this.stepItems.length;i++) {
      this.stepItems[i].dataContent = i + 1;
    }
  }

  ngAfterViewInit() {
    let that = this;
    that.getStepDoms();
    that.getStepWidths();
    that.stepOperPrev.addEventListener("click",function() {
      if((that.overWidth + that.offset) <= 0) {
        return;
      }
      if((that.overWidth + that.offset) < 60) {
        that.stepss.style.marginLeft = "-"+that.overWidth+"px";
        that.offset = 0 - that.overWidth;
        that.stepOperPrev.classList.add("disbaled");
      } else {
        that.offset -= 60;
        that.stepss.style.marginLeft = that.offset+"px";
        that.stepOperPrev.classList.remove("disbaled");
      }
    },false);
    that.stepOperNext.addEventListener("click",function() {
          if(that.offset >= 0) {
            return;
          }
          if((60 + that.offset) < 0) {
            that.offset += 60;
            that.stepss.style.marginLeft = that.offset+"px";
            that.stepOperNext.classList.remove("disbaled");
          } else {
            that.stepss.style.marginLeft = "0px";
            that.offset = 0;
            that.stepOperNext.classList.add("disbaled");
          }
      },false);
      window.addEventListener("resize",function() {
        that.getStepWidths();
      },false);
  }

  getStepWidths() {
    this.scrollWidth = this.stepss.scrollWidth;
    this.stepContainWidth = this.stepContainer.clientWidth- 40;
    this.overWidth = this.scrollWidth - this.stepContainWidth;
    if(this.overWidth > 0) {
      this.stepOperPrev.style.display = "inline-flex";
      this.stepOperNext.style.display = "inline-flex";
    } else {
      this.stepOperPrev.style.display = "none";
      this.stepOperNext.style.display = "none";
      this.stepss.style.marginLeft = "0px";
      this.offset = 0;
    }
  }

  getStepDoms() {
    this.stepContainer = document.getElementById(this.id);
    this.stepss = document.getElementById(this.id).getElementsByClassName("steps")[0];
    this.stepOperPrev = this.stepContainer.getElementsByClassName("step-prev")[0];
    this.stepOperNext = this.stepContainer.getElementsByClassName("step-next")[0];
  }

  onClickStep(index : number) {
    this.stepIndex = index;
    this.stepIndexChange.emit(this.stepIndex);
  }

}
