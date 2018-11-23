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
    menuClasss : any = {};
    menuClasss2 : any = {};

    constructor() {
    }

    ngOnInit() {
        this.menuClasss = {'nc-menu-horizontal': this.type === 'horizontal',
            'nc-menu-vertical': this.type === 'vertical',
            'nc-menu-place-down': this.place === 'down',
            'nc-menu-place-right': this.place === 'right'};
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
        if(this.type === 'horizontal' && !this.place) {
            return this.clickNavItem1(item);
        }
        if(this.type === 'vertical' && this.place === 'down') {
            return this.clickNavItem2(item);
        }
        if(this.type === 'vertical' && this.place === 'right') {
            return this.clickNavItem3(item);
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
    }

    clickNavItem2(item : any) {
        if(!item.childs || item.childs.navItems.length === 0) {
            this.clearMenuItemsActive({navItems:this.navItems});
            item.isActive = true;
            this.setMenuItemsActive({navItems:this.navItems});
            item.callback();
        } else {
            item.childs.isShow = !item.childs.isShow;
        }
    }

    clickNavItem3(item : any) {
        if(item.childs && item.childs.navItems.length !== 0) {
            return;
        }
        this.clearMenuItemsActive({navItems:this.navItems});
        item.isActive = true;
        this.setMenuItemsActive({navItems:this.navItems});
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

}