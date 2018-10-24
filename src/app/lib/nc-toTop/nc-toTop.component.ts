/**
 * Created by liuxuwen on 18-5-31.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-toTop',
  templateUrl: './nc-toTop.component.html',
  styleUrls: ['./nc-toTop.component.css']
})
export class NcToTopComponent implements OnInit {
  @Input() type : string = 'circle';
  @Input() parentId : string;
  typeClasses : any = {};
  timer : any = null;
  displayType : string;
  contentDom : any;
  isWindows : boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.isWindows = !(this.parentId &&  this.parentId !== 'window' && window.innerWidth >= 768);
    this.contentDom = this.isWindows ? window : document.getElementById(this.parentId);
    this.displayType = this.type === 'circle' ? 'flex' : 'block';
    this.typeClasses = {'nc-backTop-circle': this.type === 'circle','nc-backTop-rocket': this.type === 'rocket'};
    if(this.contentDom) {
      this.contentDom.onscroll = () => {
        let backtop = this.isWindows ? this.contentDom.pageYOffset : this.contentDom.scrollTop;
        if(backtop > 0) {
          this.setBackTopPlace(this.displayType);
        } else {
          this.setBackTopPlace("none");
        }
      };
    }
  }

  setBackTopPlace(type : any) {
    if(document.getElementById("nc-backTopz")) {
      document.getElementById("nc-backTopz").style.display = type;
    }
  }

  scrollWindow(){
    if(this.contentDom) {
      this.timer = setInterval(() => {
        let backtop = this.isWindows ? this.contentDom.pageYOffset : this.contentDom.scrollTop;
        if(this.isWindows) {
          this.contentDom.scrollBy(0,-60);
        } else {
          this.contentDom.scrollTop -= 60;
        }
        if(backtop < 1){
          clearInterval(this.timer);
        }
      },100);
    }
  }
}
