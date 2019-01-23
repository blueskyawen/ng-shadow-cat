/**
 * Created by liuxuwen on 18-11-9.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['../layout/layout.component.css']
})
export class MenuComponent {
    menuItems : any = {
        type: 'horizontal',
        place: 'down',
        navItems: [
            {title:'Navigation One',
             icon:'fa fa-car',
             url:'',
             callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Two',
             icon:'fa fa-camera',
             url:'/Navigation-Two',
             callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation There',
             icon:'fa fa-coffee',
             url:'',
             callback: () => {console.log('click menu item!');},
             childs: {
                place: 'down',
                navItems: [
                    {title:'option5',icon:'fa fa-car',url:'',
                        callback: () => {console.log('click menu item!');}},
                    {title:'option6',icon:'fa fa-camera',url:'',
                        callback: () => {console.log('click menu item!');}}
                ]
             }
            },
            {title:'Navigation Four',
             icon:'fa fa-cubes',
             url:'',
             callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Five',
             icon:'fa fa-wifi',
             url:'',
             callback: () => {console.log('click menu item!');}
            }
        ]
    };
    menuItems4 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems5 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems2 : any = {
        type: 'vertical',
        place: 'down',
        navItems: [
            {title:'Navigation One',
                icon:'fa fa-car',
                url:'',
                callback: () => {console.log('click menu item!');},
                childs: {
                    place: 'down',isShow:false,
                    navItems: [
                        {title:'option1',icon:'fa fa-wifi',url:'',place: 'down',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option2',icon:'fa fa-wifi',url:'',place: 'down',
                            callback: () => {console.log('click menu item!');},
                            childs: {
                                type:'vertical',place: 'down',isShow:false,
                                navItems: [
                                    {title:'option3',icon:'fa fa-wifi',url:'',place: 'down',
                                        callback: () => {console.log('click menu item!');}},
                                    {title:'option4',icon:'fa fa-wifi',url:'',place: 'down',
                                        callback: () => {console.log('click menu item!');}}
                                ]
                            }
                        }
                    ]
                }
            },
            {title:'Navigation Two',
                icon:'fa fa-camera',
                url:'',
                callback: () => {console.log('click menu item!');},
                childs: {
                    place: 'down',isShow:false,
                    navItems: [
                        {title:'option5',icon:'fa fa-wifi',url:'',place: 'down',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option6',icon:'fa fa-wifi',url:'',place: 'down',
                            callback: () => {console.log('click menu item!');}}
                    ]
                }
            },
            {title:'Navigation There',
                icon:'fa fa-coffee',
                url:'/Navigation-3',
                callback: () => {console.log('click menu item!');},
            },
            {title:'Navigation Four',
                icon:'fa fa-cubes',
                url:'',
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Five',
                icon:'fa fa-wifi',
                url:'',
                callback: () => {console.log('click menu item!');}
            }
        ]
    };
    menuItems6 : any = JSON.parse(JSON.stringify(this.menuItems2));
    menuItems7 : any = JSON.parse(JSON.stringify(this.menuItems2));
    menuItems3 : any = {
        type: 'vertical',
        place: 'right',
        navItems: [
            {title:'Navigation One',
                icon:'fa fa-car',
                url:'',
                callback: () => {console.log('click menu item!');},
                childs: {
                    place: 'right',
                    navItems: [
                        {title:'option1',icon:'fa fa-car',url:'',place: 'right',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option2',icon:'fa fa-car',url:'',place: 'right',
                            callback: () => {console.log('click menu item!');},
                            childs: {
                                place: 'right',
                                navItems: [
                                    {title:'option3',icon:'fa fa-car',url:'',place: 'right',
                                        callback: () => {console.log('click menu item!');}},
                                    {title:'option4',icon:'fa fa-car',url:'',place: 'right',
                                        callback: () => {console.log('click menu item!');}}
                                ]
                            }
                        }
                    ]
                }
            },
            {title:'Navigation Two',
                icon:'fa fa-camera',
                url:'',
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation There',
                icon:'fa fa-coffee',
                url:'',
                callback: () => {console.log('click menu item!');},
                childs: {
                    place: 'right',
                    navItems: [
                        {title:'option5',icon:'fa fa-camera',url:'/Navigation-3/option5',place: 'right',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option6',icon:'fa fa-camera',url:'',place: 'right',
                            callback: () => {console.log('click menu item!');}}
                    ]
                }
            },
            {title:'Navigation Four',
                icon:'a fa-cubes',
                url:'',
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Five',
                icon:'fa fa-wifi',
                url:'',
                callback: () => {console.log('click menu item!');}
            }
        ]
    };
    menuItems8 : any = JSON.parse(JSON.stringify(this.menuItems3));
    menuItems9 : any = JSON.parse(JSON.stringify(this.menuItems3));
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;
    tabItems3 : any[] = [];
    currentTab3 : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab2= this.tabItems2[0].label;
        this.tabItems3 = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab3= this.tabItems3[0].label;
    }

    menuSelected(url : any) {
        console.log('seleced Url: '+url);
    }
}
