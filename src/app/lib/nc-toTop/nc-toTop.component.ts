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

  constructor() {
  }

  ngOnInit() {
    this.displayType = this.type === 'circle' ? 'flex' : 'block';
    this.typeClasses = {'nc-backTop-circle': this.type === 'circle','nc-backTop-rocket': this.type === 'rocket'};
    window.onscroll = () => {
      var backtop = window.pageYOffset;
      if(backtop > 0){
        document.getElementById("nc-backTopz").style.display = this.displayType;
      } else {
        document.getElementById("nc-backTopz").style.display = "none";
      }
    };
  }

  scrollWindow(){
    this.timer = setInterval(() => {
      var backtop = window.pageYOffset;
      window.scrollBy(0,-60);
      if(backtop < 1){
        clearInterval(this.timer);
      }
    },100);
  }
}
