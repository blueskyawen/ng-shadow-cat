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
  typeClasses : any = {};
  timer : any = null;
  displayType : string;
  window = window;

  constructor() {
  }

  ngOnInit() {
    this.displayType = this.type === 'circle' ? 'flex' : 'block';
    this.typeClasses = {'nc-backTop-circle': this.type === 'circle','nc-backTop-rocket': this.type === 'rocket'};
    this.window.onscroll = () => {
      var backtop = this.window.pageYOffset;
      if(backtop > 0){
        this.setBackTopPlace(this.displayType);
      } else {
        this.setBackTopPlace("none");
      }
    };
  }

  setBackTopPlace(type : any) {
    if(document.getElementById("nc-backTopz")) {
      document.getElementById("nc-backTopz").style.display = type;
    }
  }

  scrollWindow(){
    this.timer = setInterval(() => {
      var backtop = this.window.pageYOffset;
      this.window.scrollBy(0,-60);
      if(backtop < 1){
        clearInterval(this.timer);
      }
    },100);
  }
}
