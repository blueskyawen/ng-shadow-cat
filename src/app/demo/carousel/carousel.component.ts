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
    {url: 'http://upload.shunwang.com/2014/0625/1403670070972.JPG',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://f4.topitme.com/4/b3/e5/1118294546054e5b34o.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://pic1.win4000.com/wallpaper/4/561cade9bbfd6.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://img17.3lian.com/d/file/201701/19/fd92ea2409b6b157c247b78ce4eda95a.jpg',disable: false,
      callback: () => {console.log('callback4');}}
  ];
  captions2 : any[] = [
    {url: 'http://upload.shunwang.com/2014/0625/1403670070972.JPG',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://f4.topitme.com/4/b3/e5/1118294546054e5b34o.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://pic1.win4000.com/wallpaper/4/561cade9bbfd6.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://img17.3lian.com/d/file/201701/19/fd92ea2409b6b157c247b78ce4eda95a.jpg',disable: false,
      callback: () => {console.log('callback4');}}
  ];
  captions3 : any[] = [
    {url: 'http://upload.shunwang.com/2014/0625/1403670070972.JPG',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://f4.topitme.com/4/b3/e5/1118294546054e5b34o.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://pic1.win4000.com/wallpaper/4/561cade9bbfd6.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://img17.3lian.com/d/file/201701/19/fd92ea2409b6b157c247b78ce4eda95a.jpg',disable: false,
      callback: () => {console.log('callback4');}}
  ];
  captions4 : any[] = [
    {url: 'http://upload.shunwang.com/2014/0625/1403670070972.JPG',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://f4.topitme.com/4/b3/e5/1118294546054e5b34o.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://pic1.win4000.com/wallpaper/4/561cade9bbfd6.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://img17.3lian.com/d/file/201701/19/fd92ea2409b6b157c247b78ce4eda95a.jpg',disable: false,
      callback: () => {console.log('callback4');}}
  ];
  captions5 : any[] = [
    {url: 'http://upload.shunwang.com/2014/0625/1403670070972.JPG',disable: false,callback: () => {console.log('callback1');}},
    {url: 'http://f4.topitme.com/4/b3/e5/1118294546054e5b34o.jpg',disable: false,callback: () => {console.log('callback2');}},
    {url: 'http://pic1.win4000.com/wallpaper/4/561cade9bbfd6.jpg',disable: false,callback: () => {console.log('callback3');}},
    {url: 'http://img17.3lian.com/d/file/201701/19/fd92ea2409b6b157c247b78ce4eda95a.jpg',disable: false,
      callback: () => {console.log('callback4');}}
  ];
  tabItems : any[] = [];
  currentTab : string;

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }

}
