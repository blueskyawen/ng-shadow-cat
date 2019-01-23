/**
 * Created by liuxuwen on 18-11-23.
 */
import { Component,OnInit,Input,Output,EventEmitter,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'nc-menu',
    templateUrl: './nc-menu.component.html',
    styleUrls: ['./nc-menu.component.css']
})
export class NcMenuComponent implements OnInit {
    @Input() type: string = 'horizontal';
    @Input() place: string = '';
    @Input() navItems : any[] = [];
    @Input() backColor : string = 'light';
    @Input() isScroll : boolean = false;
    @Input() color : string = '#f2f2f2';
    @Input() url : string = '';
    @Output() menuSelectChange = new EventEmitter();
    menuClasss : any = {};
    menuBackClasss : any = {};
    menuColorStyle : any = {};

    constructor() {
    }

    ngOnInit() {
        this.menuClasss = {'nc-menu-place-down': this.place === 'down', 'nc-menu-place-right': this.place === 'right',
            'nc-menu-scroll': this.isScroll,'nc-menu-dark':this.backColor === 'dark'};
        this.menuBackClasss = {'nc-menu-dark':this.backColor === 'dark'};
        if(this.backColor === 'manual') {
            this.menuColorStyle = {'background':this.color};
        }
        if(this.backColor === 'light') {
            this.menuColorStyle = {'background':'#fff'};
        }
        this.addMenuItemActive(this.navItems);
        this.setDefultMenuItemActive(this.navItems);
        if(this.type === 'vertical' && this.place === 'down') {
            this.setMenuItemsLevel(this.navItems,1);
        }

    }

    addMenuItemActive(items : any[]) {
        if(!items || items.length === 0) {
            return;
        }

        for(let item of items) {
            item.isActive =  false;
            if(item.childs && item.childs.navItems.length !== 0) {
                this.addMenuItemActive(item.childs.navItems);
            }
        }
    }

    setDefultMenuItemActive(items : any[]) {
        if(!this.url || items.length === 0) {
            return false;
        }

        for(let item of items) {
            if(item.url && item.url === this.url) {
                item.isActive =  true;
                return true;
            } else {
                if(item.childs && this.setDefultMenuItemActive(item.childs.navItems)) {
                    item.isActive =  true;
                    return true;
                }
            }
        }
        return false;
    }

    setMenuItemsLevel(items : any[],level : number) {
        if(!items || items.length === 0) {
            return;
        }

        for(let item of items) {
            if(item.childs) {
                item.childs.level =  level;
                this.setMenuItemsLevel(item.childs.navItems,level + 1);
            }
        }
    }

    getSubMenuClass(item : any) {
        return {'nc-menu-place-down': item.place === 'down','nc-secondmenu':item.place === 'down',
            'nc-menu-place-right': item.place === 'right','nc-secondmenu-right':item.place === 'right',
            'nc-sub-menu-show': item.isShow};
    }

    getBackClass() {
        return {'nc-menu-dark':this.backColor === 'dark'};
    }

    getCaratClass(item : any) {
        return {'nc-carat-down': !item.isShow,
            'nc-carat-up': item.isShow};
    }

    getMenuActiveClass(item : any) {
        return {'active':item.isActive && !item.childs,'child-active':item.isActive && item.childs};
    }

    clickNavItem(item : any) {
        if(this.type === 'horizontal') {
            return this.clickNavItem1(item);
        }
        if(this.type === 'vertical' && this.place === 'down') {
            return this.clickNavItem2(item);
        }
        if(this.type === 'vertical' && this.place === 'right') {
            return this.clickNavItem1(item);
        }
    }

    clickNavItem1(item : any) {
        if(item.childs && item.childs.navItems.length !== 0) {
            return;
        }
        this.clearMenuItemsActive({navItems:this.navItems});
        item.isActive = true;
        this.setMenuItemsActive({navItems:this.navItems});
        item.callback();
        this.menuSelectChange.emit(item.url);
    }

    clickNavItem2(item : any) {
        if(!item.childs || item.childs.navItems.length === 0) {
            this.clearMenuItemsActive({navItems:this.navItems});
            item.isActive = true;
            this.setMenuItemsActive({navItems:this.navItems});
            item.callback();
            this.menuSelectChange.emit(item.url);
        } else {
            item.childs.isShow = !item.childs.isShow;
        }
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

}
