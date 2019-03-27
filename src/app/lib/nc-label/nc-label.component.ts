/**
 * Created by liuxuwen on 18-8-22.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-label',
  templateUrl: './nc-label.component.html',
  styleUrls: ['./nc-label.component.css']
})
export class NcLabelComponent  implements OnInit {
  @Input() type : string = 'default';
  @Input() backColor : string;
  @Input() hasborder: boolean = false;
  color: any = {
    'default': '#999','primary':'#0066ff','success':'#40bf40','info':'#6699ff','warn':'#ffad33','danger':'#ff1a1a'
  };
  labelStyles : any = {};
  types: string[] = ['default','primary','success','info','warn','danger'];

  constructor() {}

  ngOnInit() {
    if(!this.types.includes(this.type)) {
      this.type = 'default';
    }
    if(this.backColor) {
      this.labelStyles = {'background-color':this.backColor,'border':this.hasborder ? 'solid 1px #ccc' : 'none'};
    } else {
      this.labelStyles = {'background-color':this.color[this.type],'border':this.hasborder ? 'solid 1px #ccc' : 'none'};
    }
  }

}

