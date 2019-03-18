/**
 * Created by liuxuwen on 18-6-14.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  timerlen : number = 1000;
  captions : any[] = [
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo01.jpg',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo02.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo03.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo04.jpg',disable: false,callback: () => {console.log('callback4');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo05.jpg',disable: false,callback: () => {console.log('callback5');}}
  ];
  captions2 : any[] = [
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo01.jpg',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo02.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo03.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo04.jpg',disable: false,callback: () => {console.log('callback4');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo05.jpg',disable: false,callback: () => {console.log('callback5');}}
  ];
  captions3 : any[] = [
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo01.jpg',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo02.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo03.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo04.jpg',disable: false,callback: () => {console.log('callback4');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo05.jpg',disable: false,callback: () => {console.log('callback5');}}
  ];
  showIndex3: number = 1;
  captions4 : any[] = [
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo01.jpg',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo02.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo03.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo04.jpg',disable: false,callback: () => {console.log('callback4');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo05.jpg',disable: false,callback: () => {console.log('callback5');}}
  ];
  captions5 : any[] = [
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo01.jpg',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo02.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo03.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo04.jpg',disable: false,callback: () => {console.log('callback4');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo05.jpg',disable: false,callback: () => {console.log('callback5');}}
  ];
  captions6 : any[] = [
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo01.jpg',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo02.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo03.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo04.jpg',disable: false,callback: () => {console.log('callback4');}},
    {url: 'http://blueskyawen.com/ng-shadow-cat/assets/image/carousel-photo05.jpg',disable: false,callback: () => {console.log('callback5');}}
  ];
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }

  handleCarouselChange(index : number) {
    console.log('current carousel index: '+index);
  }
}
