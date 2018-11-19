import { Component,OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuTypes : any[] = [{'name':'组件','value':'components','isActive':true},
    {'name':'模式','value':'pattern','isActive':false},
    {'name':'关于','value':'about','isActive':false}];
  currentMenu : any;
  isExtend : boolean = true;
  isShowActicle : boolean = true;
  urls : string[] = [];
  activeMenu : string;
  activeSideItem : string;

  constructor(private router : Router) {
    this.urls = location.href.split('/');
    this.activeMenu = this.urls[this.urls.length - 2];
    this.activeSideItem = this.urls[this.urls.length - 1];
    this.currentMenu = this.menuTypes.find((item) => {return item.value === this.activeMenu;});
    if(!this.currentMenu) {
      this.currentMenu = this.menuTypes[0];
    }
  }

  chickMenu(menuType : any) {
    this.currentMenu = menuType;
    if(this.currentMenu.value === 'components') {
      this.router.navigate(['/components/loading']);
    } else if(this.currentMenu.value === 'about') {
      this.router.navigate(['/about/about']);
    } else if(this.currentMenu.value === 'pattern') {
      this.router.navigate(['/pattern/pageHeader']);
    }
    this.isShowActicle = false;
    setTimeout(() => {
      this.isShowActicle = true;
    },50);
  }

  changeExtend() {
    this.isExtend = !this.isExtend;
  }
}
