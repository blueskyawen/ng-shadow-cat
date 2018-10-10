/**
 * Created by liuxuwen on 18-6-20.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'nc-tree',
  templateUrl: './nc-tree.component.html',
  styleUrls: ['./nc-tree.component.css']
})
export class NcTreeComponent {
  nodes : any[] = [
    {label:'Test1',value:'Test1',
      children:[
        {label:'Test3',value:'Test3',isleaf:true,disable:false},
        {label:'Test4',value:'Test4',isleaf:true,disable:false}
      ]
    },
    {label:'Test5',value:'Test5',
      children:[
        {label:'Test6',value:'Test6',isleaf:true,disable:false}
      ]
    },
    {label:'Test2',value:'Test2',isleaf:true,disable:false}
  ];

  constructor() {

  }

  fold() {

  }

}
