/**
 * Created by liuxuwen on 18-11-3.
 */
/**
 * Created by liuxuwen on 18-11-2.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'nc-pie-chart',
    templateUrl: './nc-pie-chart.component.html',
    styleUrls: ['./nc-pie-chart.component.css']
})
export class NcPieChartComponent  implements OnInit {
    @Input() data : any = {
        title:'使用率',
        type:'pie',
        data:[{title:'已使用',value:37},{title:'总共',value:100}]};
    leftClass1 : any = {};
    leftClass2 : any = {};
    rightClass1 : any = {};
    rightClass2 : any = {};
    leftStyle : any = {};
    rightStyle  : any = {};
    pieClasses : any = {};
    isShow : boolean = false;
    hoverItemObj : any = undefined;
    hoverItemStyle : any = {'top':'0px','left':'0px'};
    timerId : any = undefined;


    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
            this.initChart();
        },10);
    }

    initChart() {
        this.data.usage = Number(this.data.data[0].value * 100 / this.data.data[1].value);
        this.data.usageshow = this.data.usage.toFixed(1) + '%';
        this.data.isMoveleft = this.data.usage < 50 ? true : false;
        this.data.barusage = Math.round(this.data.data[0].value * 360 / this.data.data[1].value) - 180;
        this.pieClasses = {'nc-pie-chart-middle':this.data.usage > 50 && this.data.usage <= 80,
            'nc-pie-chart-high':this.data.usage > 80};
        if(this.data.isMoveleft) {
            this.leftClass1 = {'z-index2':this.data.isMoveleft,'z-index1':!this.data.isMoveleft};
            this.rightClass1 = {'z-index1':this.data.isMoveleft,'z-index2':!this.data.isMoveleft};
            this.leftClass2 = {'z-index2':this.data.isMoveleft,'z-index1':!this.data.isMoveleft,
                'noDisplay':this.data.isMoveleft};
            this.rightClass2 = {'z-index1':this.data.isMoveleft,'z-index2':!this.data.isMoveleft,
                'noDisplay':!this.data.isMoveleft};
            this.leftStyle = {'transform':'rotate('+this.data.barusage+'deg)'};
        } else {
            this.leftStyle = {'transform':'rotate(0deg)'};
            setTimeout(() => {
                this.leftClass1 = {'z-index2':this.data.isMoveleft,'z-index1':!this.data.isMoveleft};
                this.leftClass2 = {'z-index2':this.data.isMoveleft,'z-index1':!this.data.isMoveleft,
                    'noDisplay':this.data.isMoveleft};
                this.rightClass1 = {'z-index1':this.data.isMoveleft,'z-index2':!this.data.isMoveleft};
                this.rightClass2 = {'z-index1':this.data.isMoveleft,'z-index2':!this.data.isMoveleft,
                    'noDisplay':!this.data.isMoveleft};
                this.rightStyle = {'transform':'rotate('+this.data.barusage+'deg)'};
            },300);
        }
        this.data.data[0].color = this.data.usage <= 50 ? '#4db8ff' :
            this.data.usage > 50 && this.data.usage <= 80 ? '#ffb366' : '#ff1a1a';
    }

    hoverPieItemOut() {
        this.hoverItemObj = undefined;
    }

    hoverPieItem(type : any,event : any) {
        if(type === 'left') {
            this.hoverItemObj = {title:'剩余',value:this.data.data[1].value - this.data.data[0].value,color:'#e6e6e6'};
        } else {
            this.hoverItemObj = this.data.data[0];
        }
        if(!this.timerId ) {
            this.timerId = setTimeout(() => {
                this.hoverItemStyle = {'opacity':1,'top':(event.clientY + 5)+'px','left':(event.clientX + 5)+'px'};
                this.timerId = undefined;
            },100);
        }
    }
}