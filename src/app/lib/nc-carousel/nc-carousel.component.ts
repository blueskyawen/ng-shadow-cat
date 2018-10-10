/**
 * Created by liuxuwen on 18-6-14.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-carousel',
  templateUrl: './nc-carousel.component.html',
  styleUrls: ['./nc-carousel.component.css']
})
export class NcCarouselComponent implements OnInit {
  @Input() isAuto : boolean  = false;
  @Input() effect : string  = 'scroll';
  @Input() timerlen : number = 1000;
  @Input() captions : any[] = [];
  activeIndex : number = 0;
  isCanClick : boolean = true;
  oldIndex : number = 0;

  constructor() {}

  ngOnInit() {
    for(let caption of this.captions) {
      caption.moveStyle = {};
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
      },this.timerlen);
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
      },this.timerlen);
    },50);
  }

  recoverImgState() {
    this.captions[this.oldIndex].moveStyle = {'transition':'left 1s ease-out','top':'100%','left':'0%'};
    this.isCanClick = true;
  }


}
