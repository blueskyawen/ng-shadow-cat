/**
 * Created by liuxuwen on 18-6-2.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-breadcrumb',
  templateUrl: './nc-breadcrumb.component.html',
  styleUrls: ['./nc-breadcrumb.component.css']
})
export class NcBreadcrumbComponent {
  @Input() items : any[] = [
    {url: 'aaa',label: '首页', isDisable: false},
    {url: 'bbb',label: '前端', isDisable: false},
    {label: 'HTML'},
  ];
  @Input() style : string = '/';
  breadClasses : any = {}

  constructor() {}

  clickit(item : any) {
    if(!item.url || item.isDisable) {
      return;
    }
    alert('route to ' + item.url);
  }
}
