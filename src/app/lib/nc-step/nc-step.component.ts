/**
 * Created by liuxuwen on 18-6-7.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges,AfterViewInit } from '@angular/core';
declare var $: any;

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
  @Input() name: string;
  stepClass: any = {};
  outWidth : any = 0;
  innerWidth : any = 0;
  $stepCon : any;
  $stepss : any;
  offset : any = 0;
  leftWidth : any = 0;

  constructor() {
  }

  ngOnInit() {
    for(let i = 0;i < this.stepItems.length;i++) {
      this.stepItems[i].dataContent = i + 1;
    }
  }

  ngAfterViewInit() {
    this.regetWidths();
    let that = this;
    $(".steps-container[title="+this.name+"] .step-prev").click(function() {
      if((that.leftWidth + that.offset) <= 1) {
        return;
      }
      if((that.leftWidth + that.offset) < 60) {
        $(this).closest(".steps-container").find(".steps:eq(0)").animate({'margin-left': '-'+that.leftWidth+'px'},300);
        that.offset = 0 - that.leftWidth;
      } else {
        $(this).closest(".steps-container").find(".steps:eq(0)").animate({'margin-left': '-=60px'},300);
        that.offset -= 60;
      }
    });
    $(".steps-container[title="+this.name+"] .step-next").click(function() {
      if(that.offset >= 0) {
        return;
      }
      if((60 + that.offset) < 0) {
        $(this).closest(".steps-container").find(".steps:eq(0)").animate({'margin-left': '+=60px'},300);
        that.offset += 60;
      } else {
        $(this).closest(".steps-container").find(".steps:eq(0)").animate({'margin-left': '0px'},300);
        that.offset = 0;
      }
    });
    $(window).resize(function(){
      that.regetWidths();
    });
  }

  regetWidths() {
    this.innerWidth = 0;
    this.$stepCon = $(".steps-container:eq(0)");
    this.$stepss = $(".steps:eq(0) .step");
    this.outWidth = this.$stepCon.width();
    for(let i=0;i < this.$stepss.length;i++) {
      this.innerWidth += this.$stepss.eq(i).outerWidth(false);
    }
    this.leftWidth = this.innerWidth - this.outWidth;
    if(this.leftWidth > 0) {
      $(".steps-container[title="+this.name+"] .step-oper").css('display','inline-flex');
    } else {
      $(".steps-container[title="+this.name+"] .step-oper").css('display','none')
    }
  }

  onClickStep(index : number) {
    this.stepIndex = index;
    this.stepIndexChange.emit(this.stepIndex);
  }

}
