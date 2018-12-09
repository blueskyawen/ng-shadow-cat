/**
 * Created by liuxuwen on 18-10-31.
 */
/**
 * Created by liuxuwen on 18-8-23.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    menuItems : any = {
        type: 'horizontal',
        place: 'down',
        navItems: [
            {title:'Navigation One',
                icon:'fa fa-car',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Two',
                icon:'fa fa-camera',
                isActive:true,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation There',
                icon:'fa fa-coffee',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    place: 'down',
                    navItems: [
                        {title:'option5',icon:'fa fa-car',isActive:false,
                            callback: () => {console.log('click menu item!');}},
                        {title:'option6',icon:'fa fa-camera',isActive:false,
                            callback: () => {console.log('click menu item!');}}
                    ]
                }
            },
            {title:'Navigation Four',
                icon:'fa fa-cubes',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Five',
                icon:'fa fa-wifi',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            }
        ]
    };
    menuItems2 : any = {
        type: 'vertical',
        place: 'down',
        navItems: [
            {title:'Navigation One',
                icon:'fa fa-car',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    place: 'down',isShow:false,
                    navItems: [
                        {title:'option1',icon:'fa fa-wifi',isActive:false,place: 'down',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option2',icon:'fa fa-wifi',isActive:false,place: 'down',
                            callback: () => {console.log('click menu item!');},
                            childs: {
                                type:'vertical',place: 'down',isShow:false,
                                navItems: [
                                    {title:'option3',icon:'fa fa-wifi',isActive:false,place: 'down',
                                        callback: () => {console.log('click menu item!');}},
                                    {title:'option4',icon:'fa fa-wifi',isActive:false,place: 'down',
                                        callback: () => {console.log('click menu item!');}}
                                ]
                            }
                        }
                    ]
                }
            },
            {title:'Navigation Two',
                icon:'fa fa-camera',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    place: 'down',isShow:false,
                    navItems: [
                        {title:'option5',icon:'fa fa-wifi',isActive:false,place: 'down',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option6',icon:'fa fa-wifi',isActive:false,place: 'down',
                            callback: () => {console.log('click menu item!');}}
                    ]
                }
            },
            {title:'Navigation There',
                icon:'fa fa-coffee',
                isActive:true,
                callback: () => {console.log('click menu item!');},
            },
            {title:'Navigation Four',
                icon:'fa fa-cubes',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Five',
                icon:'fa fa-wifi',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            }
        ]
    };
    menuItems3 : any = {
        type: 'vertical',
        place: 'right',
        navItems: [
            {title:'Navigation One',
                icon:'fa fa-car',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    place: 'right',
                    navItems: [
                        {title:'option1',icon:'fa fa-car',isActive:false,place: 'right',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option2',icon:'fa fa-car',isActive:false,place: 'right',
                            callback: () => {console.log('click menu item!');},
                            childs: {
                                place: 'right',
                                navItems: [
                                    {title:'option3',icon:'fa fa-car',isActive:false,place: 'right',
                                        callback: () => {console.log('click menu item!');}},
                                    {title:'option4',icon:'fa fa-car',isActive:false,place: 'right',
                                        callback: () => {console.log('click menu item!');}}
                                ]
                            }
                        }
                    ]
                }
            },
            {title:'Navigation Two',
                icon:'fa fa-camera',
                isActive:true,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation There',
                icon:'fa fa-coffee',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    place: 'right',
                    navItems: [
                        {title:'option5',icon:'fa fa-camera',isActive:false,place: 'right',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option6',icon:'fa fa-camera',isActive:false,place: 'right',
                            callback: () => {console.log('click menu item!');}}
                    ]
                }
            },
            {title:'Navigation Four',
                icon:'a fa-cubes',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Five',
                icon:'fa fa-wifi',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            }
        ]
    };
    menuItems4 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems5 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems6 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems7 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems8 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems9 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems10 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems17 : any = JSON.parse(JSON.stringify(this.menuItems));
    menuItems18 : any = JSON.parse(JSON.stringify(this.menuItems));

    menuItems11 : any = JSON.parse(JSON.stringify(this.menuItems2));
    menuItems12 : any = JSON.parse(JSON.stringify(this.menuItems2));
    menuItems13 : any = JSON.parse(JSON.stringify(this.menuItems2));
    menuItems14 : any = JSON.parse(JSON.stringify(this.menuItems2));
    menuItems15 : any = JSON.parse(JSON.stringify(this.menuItems2));

    menuItems21 : any = JSON.parse(JSON.stringify(this.menuItems3));
    tabItems : any[] = [];
    currentTab : string;
    tabItems2 : any[] = [];
    currentTab2 : string;
    showSideMenus: any[] = [true,true,true,true,true,true];

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
        this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
        this.currentTab2= this.tabItems2[0].label;
    }

    extendSideMenu(index : number) {
        this.showSideMenus[index] = !this.showSideMenus[index];
    }
}
