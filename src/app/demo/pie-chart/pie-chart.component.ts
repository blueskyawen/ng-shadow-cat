/**
 * Created by liuxuwen on 18-11-3.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-pie-chart',
    templateUrl: './pie-chart.component.html'
})
export class PieChartComponent {
    datas1 = [
        {title:'使用率',type:'pie',data:[{title:'已使用',value:37},{title:'总共',value:100}]},
        {title:'使用率',type:'pie',data:[{title:'已使用',value:75},{title:'总共',value:100}]},
        {title:'使用率',type:'pie',data:[{title:'已使用',value:90},{title:'总共',value:100}]}
    ];
    datas2 = [
        {title:'使用率',type:'annulus',data:[{title:'已使用',value:37},{title:'总共',value:100}]},
        {title:'使用率',type:'annulus',data:[{title:'已使用',value:75},{title:'总共',value:100}]},
        {title:'使用率',type:'annulus',data:[{title:'已使用',value:90},{title:'总共',value:100}]}
    ];
    tabItems : any[] = [];
    currentTab : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }
}