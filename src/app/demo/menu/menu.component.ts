/**
 * Created by liuxuwen on 18-11-9.
 */
import { Component,OnInit } from '@angular/core';

@Component({
    selector: 'demo-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    menuItems : any = {
        type: 'horizontal',
        place: '',
        navItems: [
            {title:'Navigation One',
                 icon:'nc-icon fa fa-car',
                 isActive:false,
                 callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Two',
                icon:'nc-icon fa fa-camera',
                isActive:true,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation There',
                icon:'nc-icon fa fa-coffee',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    type:'vertical',place: 'down',
                    navItems: [
                        {title:'option5',icon:'',isActive:false,
                            callback: () => {console.log('click menu item!');}},
                        {title:'option6',icon:'',isActive:false,
                            callback: () => {console.log('click menu item!');}}
                    ]
                }
            },
            {title:'Navigation Four',
                icon:'nc-icon fa fa-cubes',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Five',
                icon:'nc-icon fa fa-wifi',
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
                icon:'nc-icon fa fa-car',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    type:'vertical',place: 'down',isShow:false,
                    navItems: [
                        {title:'option1',icon:'',isActive:false,type:'vertical',place: 'down',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option2',icon:'',isActive:false,type:'vertical',place: 'down',
                            callback: () => {console.log('click menu item!');},
                            childs: {
                                type:'vertical',place: 'down',isShow:false,
                                navItems: [
                                    {title:'option3',icon:'',isActive:false,
                                        callback: () => {console.log('click menu item!');}},
                                    {title:'option4',icon:'',isActive:false,
                                        callback: () => {console.log('click menu item!');}}
                                ]
                            }
                        }
                    ]
                }
            },
            {title:'Navigation Two',
                icon:'nc-icon fa fa-camera',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    type:'vertical',place: 'down',isShow:false,
                    navItems: [
                        {title:'option5',icon:'',isActive:false,
                            callback: () => {console.log('click menu item!');}},
                        {title:'option6',icon:'',isActive:false,
                            callback: () => {console.log('click menu item!');}}
                    ]
                }
            },
            {title:'Navigation There',
                icon:'nc-icon fa fa-coffee',
                isActive:true,
                callback: () => {console.log('click menu item!');},
            },
            {title:'Navigation Four',
                icon:'nc-icon fa fa-cubes',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Five',
                icon:'nc-icon fa fa-wifi',
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
                icon:'nc-icon fa fa-car',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    type:'vertical',place: 'down',
                    navItems: [
                        {title:'option1',icon:'',isActive:false,type:'vertical',place: 'down',
                            callback: () => {console.log('click menu item!');}},
                        {title:'option2',icon:'',isActive:false,type:'vertical',place: 'down',
                            callback: () => {console.log('click menu item!');},
                            childs: {
                                type:'vertical',place: 'down',
                                navItems: [
                                    {title:'option3',icon:'',isActive:false,
                                        callback: () => {console.log('click menu item!');}},
                                    {title:'option4',icon:'',isActive:false,
                                        callback: () => {console.log('click menu item!');}}
                                ]
                            }
                        }
                    ]
                }
            },
            {title:'Navigation Two',
                icon:'nc-icon fa fa-camera',
                isActive:true,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation There',
                icon:'nc-icon fa fa-coffee',
                isActive:false,
                callback: () => {console.log('click menu item!');},
                childs: {
                    type:'vertical',place: 'down',
                    navItems: [
                        {title:'option5',icon:'',isActive:false,
                            callback: () => {console.log('click menu item!');}},
                        {title:'option6',icon:'',isActive:false,
                            callback: () => {console.log('click menu item!');}}
                    ]
                }
            },
            {title:'Navigation Four',
                icon:'nc-icon fa fa-cubes',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            },
            {title:'Navigation Five',
                icon:'nc-icon fa fa-wifi',
                isActive:false,
                callback: () => {console.log('click menu item!');}
            }
        ]
    };
    isShowSide1 : boolean = true;
    isShowSide2 : boolean = true;
    tabItems : any[] = [];
    currentTab : string;

    constructor() {
        this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
            {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
        this.currentTab= this.tabItems[0].label;
    }

}