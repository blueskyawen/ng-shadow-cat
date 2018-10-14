/**
 * Created by liuxuwen on 18-6-14.
 */
import { Component,OnInit,Input,OnDestroy,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
//import {clearInterval,setInterval} from "timers";

@Component({
  selector: 'nc-carousel',
  templateUrl: './nc-carousel.component.html',
  styleUrls: ['./nc-carousel.component.css']
})
export class NcCarouselComponent implements OnInit, OnDestroy {
  @Input() effect : string  = 'scroll';
  @Input() timerlen : number;
  @Input() captions : any[] = [];
  @Input() height : string = '650px';
  @Input() width : string = '100%';
  @Input() isPause : boolean = false;
  activeIndex : number = 0;
  isCanClick : boolean = true;
  oldIndex : number = 0;
  carStyleStr : any;
  autoTimerId : any = undefined;

  constructor() {}

  ngOnInit() {
    for(let caption of this.captions) {
      caption.moveStyle = {};
    }
    this.carStyleStr = {'height':this.height,'width' :this.width};
    this.setAutoTimer();
  }

  ngOnDestroy() {
    this.clearAutoTimer();
  }

  setAutoTimer() {
    if(this.timerlen) {
      this.autoTimerId = setInterval(() => {
        this.next();
      },this.timerlen);
    }
  }

  clearAutoTimer() {
    if(this.autoTimerId) {
      clearInterval(this.autoTimerId);
      this.autoTimerId = undefined;
    }
  }

  callBack(caption : any) {
    if(caption.disable) {
      return;
    }
    (caption.callback)();
  }

  changePic(index : number) {
    if(!this.isCanClick) {
      return;
    }
    if(this.effect === 'scroll') {
      if(this.activeIndex < index) {
        this.changeRight(index);
      } else {
        this.changeleft(index);
      }
    } else {
      this.hideItems();
      this.activeIndex = index;
      this.captions[this.activeIndex].moveStyle = {'opacity':'1'};
    }
  }

  hideItems() {
    for(let option of this.captions) {
      option.moveStyle = {'opacity':'0'};
    }
  }

  pre() {
    if(!this.isCanClick) {
      return;
    }
    if(this.effect === 'scroll') {
      if(this.activeIndex > 0) {
        this.changeleft(this.activeIndex - 1);
      } else {
        this.changeleft(this.captions.length - 1);
      }
    } else {
      this.hideItems();
      if(this.activeIndex > 0) {
        this.activeIndex--;
      } else {
        this.activeIndex = this.captions.length - 1;
      }
      this.captions[this.activeIndex].moveStyle = {'opacity':'1'};
    }
  }

  next() {
    if(!this.isCanClick) {
      return;
    }
    if(this.effect === 'scroll') {
      if(this.activeIndex < this.captions.length - 1) {
        this.changeRight(this.activeIndex + 1);
      } else {
        this.changeRight(0);
      }
    } else {
      this.hideItems();
      if(this.activeIndex < this.captions.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
      this.captions[this.activeIndex].moveStyle = {'opacity':'1'};
    }
  }

  changeleft(curIndex : number) {
    this.captions[curIndex].moveStyle = {'transition':'none','top':'0%','left':'-100%'};
    this.isCanClick = false;
    setTimeout(() => {
      this.captions[curIndex].moveStyle = {'transition':'left 1s ease-out','top':'0%','left':'0%'};
      this.captions[this.activeIndex].moveStyle = {'transition':'left 1s ease-out','top':'0%','left':'100%'};
      this.oldIndex = this.activeIndex;
      this.activeIndex = curIndex;
      setTimeout(() => {
        this.recoverImgState();
      },1000);
    },50);
  }
  changeRight(curIndex : number) {
    this.captions[curIndex].moveStyle = {'transition':'none','top':'0%','left':'100%'};
    this.isCanClick = false;
    setTimeout(() => {
      this.captions[curIndex].moveStyle = {'transition':'left 1s ease-out','top':'0%','left':'0%'};
      this.captions[this.activeIndex].moveStyle = {'transition':'left 1s ease-out','top':'0%','left':'-100%'};
      this.oldIndex = this.activeIndex;
      this.activeIndex = curIndex;
      setTimeout(() => {
        this.recoverImgState();
      },1000);
    },50);
  }

  recoverImgState() {
    this.captions[this.oldIndex].moveStyle = {'transition':'left 1s ease-out','top':'100%','left':'0%'};
    this.isCanClick = true;
  }

  moveCarousel(type : any) {
    if(!this.isPause) {
      return;
    }
    if(type === 'over') {
      this.clearAutoTimer();
    }
    if(type === 'out') {
      this.setAutoTimer();
    }
  }

}
