/**
 * Created by liuxuwen on 18-11-2.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'nc-bar-chart',
    templateUrl: './nc-bar-chart.component.html',
    styleUrls: ['./nc-bar-chart.component.css']
})
export class NcBarChartComponent  implements OnInit {
    @Input() data : any = {
        title:'图表一',
        width:'80%',
        height:'360px',
        options:[
            {index:0,
             obj:'对象1',
             color:'#70dbdb',
             data:[{name:'项目1',used:15,total:100},{name:'项目2',used:30,total:100},
                    {name:'项目3',used:40,total:100},{name:'项目4',used:50,total:100},
                    {name:'项目5',used:70,total:100},{name:'项目6',used:90,total:100}]
            }]
    };
    barOptions : any[] = [];
    colorClasses : any = {};
    widthOfperBar : string;
    widthOfoneBar : string;
    alertStyle : any = {};
    barTraslate : any = 'translateY(100%)';
    hoverItemObj : any = undefined;
    hoverItemStyle : any = {'top':'0px','left':'0px'};
    timerId : any = undefined;

    constructor() {}

    ngOnInit() {
        this.data.options[0].data.forEach((item) => {
            this.barOptions.push({name:item.name,bar_data: []});
        });
        this.widthOfperBar = Number(100 / this.barOptions.length).toFixed(1) + '%';
        this.widthOfoneBar = Number(60 / this.data.options.length).toFixed(1) + '%';
        this.data.options.forEach((option) =>  {
            for(let index=0;index < option.data.length;index++) {
                let tmpUsage = Math.round(option.data[index].used * 100 / option.data[index].total) + '%';
                this.barOptions[index].bar_data.push({obj:option.obj,color:option.color,
                                                    usage:tmpUsage,useNum:option.data[index].used});
            }
        });
        setTimeout(() => {
            this.barTraslate = 'translateY(0%)';
        },0);
    }

    mouseOverItem(index : any,event : any) {
        this.hoverItemObj = this.barOptions[index];
        if(!this.timerId ) {
            this.timerId = setTimeout(() => {
                this.hoverItemStyle = {'opacity':1,'top':(event.clientY + 5)+'px','left':(event.clientX + 5)+'px'};
                this.timerId = undefined;
            },100);
        }
    }

    mouseLeaveBars() {
        this.hoverItemObj = undefined;
    }
}