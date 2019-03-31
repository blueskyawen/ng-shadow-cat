/**
 * Created by liuxuwen on 18-6-14.
 */
import { Component,OnInit,Input,Output,OnDestroy,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';
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
  @Input() showIndex : number = 0;
  @Input() circularBead : string = '';
  @Output() showIndexChange = new EventEmitter<number>();
  isCanClick : boolean = true;
  oldIndex : number = 0;
  carStyleStr : any;
  autoTimerId : any = undefined;
  imgStyleStr : any;
  imgRadius: string = 'none';

  constructor() {}

  ngOnInit() {
    this.initCarousel();
    this.carStyleStr = {'height': this.height, 'width': this.width};
    this.imgRadius = this.circularBead ? this.circularBead : 'none';
    this.imgStyleStr = {'border-radius': this.imgRadius};
    this.setAutoTimer();
  }

  initCarousel() {
    for(let caption of this.captions) {
      caption.moveStyle = {};
    }
    if(this.effect === 'scroll') {
      this.captions[this.showIndex].moveStyle = {'top': '0%', 'left': '0%', 'border-radius': this.imgRadius};
    } else {
      this.captions[this.showIndex].moveStyle = {'opacity':'1','z-index':'1'};
    }
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
      if(this.showIndex < index) {
        this.changeRight(index);
      } else {
        this.changeleft(index);
      }
    } else {
      this.hideItems();
      this.showIndex = index;
      this.captions[this.showIndex].moveStyle = {'opacity':'1','z-index':'1'};
      this.showIndexChange.emit(this.showIndex);
    }
  }

  hideItems() {
    for(let option of this.captions) {
      option.moveStyle = {'opacity':'0','z-index':'0'};
    }
  }

  pre() {
    if(!this.isCanClick) {
      return;
    }
    if(this.effect === 'scroll') {
      if(this.showIndex > 0) {
        this.changeleft(this.showIndex - 1);
      } else {
        this.changeleft(this.captions.length - 1);
      }
    } else {
      this.hideItems();
      if(this.showIndex > 0) {
        this.showIndex--;
      } else {
        this.showIndex = this.captions.length - 1;
      }
      this.captions[this.showIndex].moveStyle = {'opacity':'1','z-index':'1'};
      this.showIndexChange.emit(this.showIndex);
    }
  }

  next() {
    if(!this.isCanClick) {
      return;
    }
    if(this.effect === 'scroll') {
      if(this.showIndex < this.captions.length - 1) {
        this.changeRight(this.showIndex + 1);
      } else {
        this.changeRight(0);
      }
    } else {
      this.hideItems();
      if(this.showIndex < this.captions.length - 1) {
        this.showIndex++;
      } else {
        this.showIndex = 0;
      }
      this.captions[this.showIndex].moveStyle = {'opacity': '1','z-index':'1'};
      this.showIndexChange.emit(this.showIndex);
    }
  }

  changeleft(curIndex : number) {
    this.captions[curIndex].moveStyle = {'transition':'none','top':'0%','left':'-100%'};
    this.isCanClick = false;
    setTimeout(() => {
      this.captions[curIndex].moveStyle = {'transition':'left 1s ease-out','top':'0%','left':'0%'};
      this.captions[this.showIndex].moveStyle = {'transition':'left 1s ease-out','top':'0%','left':'100%'};
      this.oldIndex = this.showIndex;
      this.showIndex = curIndex;
      this.showIndexChange.emit(this.showIndex);
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
      this.captions[this.showIndex].moveStyle = {'transition':'left 1s ease-out','top':'0%','left':'-100%'};
      this.oldIndex = this.showIndex;
      this.showIndex = curIndex;
      this.showIndexChange.emit(this.showIndex);
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
