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

  constructor(private router : Router) {
    this.currentMenu = this.menuTypes[0];
  }

  chickMenu(menuType : any) {
    this.currentMenu = menuType;
    if(this.currentMenu.value === 'components') {
      this.router.navigate(['/components/loading']);
    } else if(this.currentMenu.value === 'about') {
      this.router.navigate(['/about/grid']);
    } else if(this.currentMenu.value === 'pattern') {
      this.router.navigate(['/pattern/navbar']);
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
