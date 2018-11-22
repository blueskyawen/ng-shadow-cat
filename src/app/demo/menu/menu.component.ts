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
        place: 'down/right',
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
    menuClasss : any = {};
    menuClasss2 : any = {};
    menuClasss3 : any = {};
    isShowSide1 : boolean = true;
    isShowSide2 : boolean = true;

    constructor() {
        this.menuClasss = this.getSubMenuClass(this.menuItems);
        this.menuClasss2 = this.getSubMenuClass(this.menuItems2);
        this.menuClasss3 = this.getSubMenuClass(this.menuItems3);
    }

    getSubMenuClass(item : any) {
        return {'nc-menu-horizontal': item.type === 'horizontal',
            'nc-menu-vertical': item.type === 'vertical',
            'nc-menu-place-down': item.place === 'down',
            'nc-menu-place-right': item.place === 'right',
            'sub-menu-show':item.isShow};
    }

    getCaratClass(item : any) {
        return {'nc-carat-down': !item.isShow,
            'nc-carat-up': item.isShow};
    }

    clickNavItem(item : any) {
        if(item.childs && item.childs.navItems.length !== 0) {
            return;
        }
        this.clearMenuItemsActive(this.menuItems);
        item.isActive = true;
        this.setMenuItemsActive(this.menuItems);
        item.callback();
    }

    clickNavItem2(item : any) {
        if(!this.isShowSide1) {return;}
        if(!item.childs || item.childs.navItems.length === 0) {
            this.clearMenuItemsActive(this.menuItems2);
            item.isActive = true;
            this.setMenuItemsActive(this.menuItems2);
            item.callback();
        } else {
            item.childs.isShow = !item.childs.isShow;
        }
    }

    clickNavItem3(item : any) {
        if(item.childs && item.childs.navItems.length !== 0) {
            return;
        }
        this.clearMenuItemsActive(this.menuItems3);
        item.isActive = true;
        this.setMenuItemsActive(this.menuItems3);
        item.callback();
    }

    clearMenuItemsActive(menuNav : any) {
        if(!menuNav || menuNav.navItems.length === 0) {
            return;
        }
        for(let index = 0;index < menuNav.navItems.length;index++) {
            menuNav.navItems[index].isActive = false;
            this.clearMenuItemsActive(menuNav.navItems[index].childs);
        }
    }

    setMenuItemsActive(MenuNav : any) {
        if(MenuNav && MenuNav.navItems.length === 0) {
            return;
        }
        for(let index = 0;index < MenuNav.navItems.length;index++) {
            MenuNav.navItems[index].isActive = this.setMenuChildrenActive(MenuNav.navItems[index]);
            //MenuNav.navItems[index].isActive = this.setMenuItemsActive(MenuNav.navItems[index].childs);
        }
    }

    setMenuChildrenActive(childItem : any) {
        if(!childItem.childs || childItem.childs.navItems.length === 0) {
            return childItem.isActive;
        }
        for(let index = 0;index < childItem.childs.navItems.length;index++) {
            if(this.setMenuChildrenActive(childItem.childs.navItems[index])) {
                childItem.isActive = true;
                return true;
            }
        }
        return false;
    }

    antionUser(antIndex : any) {
        if(antIndex === '1') {
            //this.isShowSide1 = !this.isShowSide1;
        } else {
            //this.isShowSide2 = !this.isShowSide2;
        }
    }
}