import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-exhibit',
    templateUrl: './exhibit.component.html',
    styleUrls: ['./exhibit.component.css']
})
export class ExhibitComponent {
    exhibitOptions: any[] = [
        {
            name: 'X27',
            title: 'X27',
            src: 'https://wwwstatic.vivo.com.cn/vivoportal/files/image/detail/20190318/4c2f35b1ac1a27e2d962b59e2ab33c81.png'
        },
        {
            name: 'X27 Pro',
            title: 'X27 Pro',
            src: 'https://wwwstatic.vivo.com.cn/vivoportal/files/image/detail/20190409/5c9702b6e67362472a3c1bd6d1ecd089.png'
        },
        {
            name: 'X27 8GB+128GB版',
            title: 'X27 8GB+128GB版',
            src: 'https://wwwstatic.vivo.com.cn/vivoportal/files/image/detail/20190325/ca72d1132db26f764705fb3ba3ca5c8d.png'
        },
        {
            name: 'X21s',
            title: 'X21s',
            src: 'https://wwwstatic.vivo.com.cn/vivoportal/files/image/detail/20181029/6d276a4cb84a2d55cbba56cf808706d8.jpg'
        },
        {
            name: 'X23',
            title: 'X23',
            src: 'https://wwwstatic.vivo.com.cn/vivoportal/files/image/detail/20180831/bd9b5c3f5fdee7282749b4986d4e38b3.png'
        }
    ];
    defaltIndex : number = 2;
    defaltIndex2 : number = 2;
    defaltIndex3 : number = 2;
    tabItems : any[] = [];
    currentTab : string;
    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }

    curIndexChange() {
        console.log(this.defaltIndex);
    }
}
