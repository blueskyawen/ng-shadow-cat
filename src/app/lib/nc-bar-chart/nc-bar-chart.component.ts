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
            {obj:'对象1',
             color:'#70dbdb',
             data:[{used:15,total:100},{used:30,total:100},
                    {used:40,total:100},{used:50,total:100},
                    {used:70,total:100},{used:90,total:100}]
            }]
    };
    barOptions : any[] = [];
    colorClasses : any = {};
    widthOfperBar : string;
    widthOfoneBar : string;
    alertStyle : any = {};
    isShow : boolean = false;

    constructor() {}

    ngOnInit() {
        this.data.options[0].data.forEach((item) => {
            this.barOptions.push({bar_data: []});
        });
        this.widthOfperBar = Number(100 / this.barOptions.length).toFixed(1) + '%';
        this.widthOfoneBar = Number(60 / this.data.options.length).toFixed(1) + '%';
        this.data.options.forEach((option) =>  {
            for(let index=0;index < option.data.length;index++) {
                let tmpUsage = Math.round(option.data[index].used * 100 / option.data[index].total) + '%';
                this.barOptions[index].bar_data.push(tmpUsage);
            }
        });
        setTimeout(() => {this.isShow=true;},1000);
    }

}