/**
 * Created by liuxuwen on 18-11-2.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-bar-chart',
    templateUrl: './bar-chart.component.html'
})
export class BarChartComponent {
    data1 : any = {
        title:'单对象数据图表',
        width:'60%',
        height:'300px',
        options:[
            {obj:'对象1',
            color:'#70dbdb',
            data:[{name:'项目1',used:15,total:100},{name:'项目2',used:30,total:100},
                {name:'项目3',used:40,total:100},{name:'项目4',used:50,total:100},
                {name:'项目5',used:70,total:100},{name:'项目6',used:90,total:100}]
            }]
    };
    data2 : any = {
        title:'多对象数据图表',
        width:'80%',
        height:'400px',
        options:[
            {obj:'对象1',
            color:'#70dbdb',
            data:[{name:'项目1',used:15,total:100},{name:'项目2',used:30,total:100},
                {name:'项目3',used:40,total:100},{name:'项目4',used:50,total:100},
                {name:'项目5',used:70,total:100},{name:'项目6',used:90,total:100}]
            },
            {obj:'对象2',
            color:'#00e673',
            data:[{name:'项目1',used:37,total:100},{name:'项目2',used:25,total:100},
                {name:'项目3',used:50,total:100},{name:'项目4',used:78,total:100},
                {name:'项目5',used:95,total:100},{name:'项目6',used:70,total:100}]
            },
            {obj:'对象3',
            color:'#ff751a',
            data:[{name:'项目1',used:56,total:100},{name:'项目2',used:73,total:100},
                {name:'项目3',used:18,total:100},{name:'项目4',used:89,total:100},
                {name:'项目5',used:61,total:100},{name:'项目6',used:33,total:100}]
            }
        ]
    };
    tabItems : any[] = [];
    currentTab : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }
}