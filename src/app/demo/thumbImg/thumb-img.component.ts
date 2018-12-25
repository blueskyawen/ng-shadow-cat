/**
 * Created by liuxuwen on 18-8-23.
 */
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'demo-thumb-img',
  templateUrl: './thumb-img.component.html',
  styleUrls: ['./thumb-img.component.css']
})
export class ThumbImgComponent {
  images : any[] = [
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535637731&di=5bd972e8e801bbcff20ca24fdfc05553&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F55e736d12f2eb938ce736bd1df628535e5dd6ff2.jpg'
    ,alt: '富士山',
    title:'富士山被日本人民誉为“圣岳”，是日本民族的象征。作为日本的国家象征之一，在全球享有盛誉。它也经常被称作“芙蓉峰”或“富岳”以及“不二的高岭',
    callback: () => {this.goDetail()}},
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535043166987&di=ae85cfe70089bf6b31c688bd7907834a&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dec9279ab79f08202399f997c23929198%2F5bafa40f4bfbfbedeabdabf772f0f736aec31f55.jpg',
      alt: '清水寺',
      title:'清水寺位于京都东部音羽山的山腰，始建于778年，是京都最古老的寺院',
      callback: () => {this.goDetail()}},
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516181417893&di=16d75fbd079b88be369aa58abf7f4eed&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dec723c480323dd54357eaf2bb960d9ab%2F574e9258d109b3debbe3a444c6bf6c81800a4cb9.jpg',
      alt: '皇居',
      title:'东京皇居位于东京千代田区。在明治维新，江户幕府结束并由明治天皇取回管治权後',
      callback: () => {this.goDetail()}},
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539191266830&di=f7f4ba1c887957c8c9b26146a00118f1&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3D54266a347bcf3bc7fc0dc5acb878dfcd%2F0824ab18972bd40706d545c470899e510fb309fc.jpg',
      alt: '浅草寺',
      title:'浅草寺位于东京台东区，是日本现存的具有“江户风格”的民众游乐之地。浅草寺是东京都内最古老的寺庙',
      callback: () => {this.goDetail()}},
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539191514386&di=3a43bd59fcb35f63b78723402458d5cc&imgtype=0&src=http%3A%2F%2Fg3.hexunimg.cn%2F2015-02-10%2F173241229.jpg',
      alt: '银座',
      title:'银座是日本东京中央区的一个主要商业区，号称“亚洲最昂贵的地方”，象征着日本的繁荣，以高级购物商店闻名',
      callback: () => {this.goDetail()}},
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516182161919&di=66725c71639e1903db5669e9ad3995ac&imgtype=0&src=http%3A%2F%2Fs7.sinaimg.cn%2Fmw690%2F003c59Ougy6HO4U46fsb6%26690',
      alt: '东京塔',
      title:'东京塔是东京地标性建筑物，位于东京都港区芝公园，高332.6米',
      callback: () => {this.goDetail()}},
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516182226727&di=84fa5b2b8b0d4bb771e3e1b84a1fa149&imgtype=0&src=http%3A%2F%2Fpic.iflying.com%2Fupfile%2Feditor%2FTravel%2Fimage%2F20131015%2F20131015110470447044.jpg',
      alt: '樱花',
      title:'樱花是蔷薇科樱属几种植物的统称，在《中国植物志》新修订的名称中专',
      callback: () => {this.goDetail()}},
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516182421380&di=a51d13514869c4346920ad202fe2effc&imgtype=0&src=http%3A%2F%2Folbpic.ol-img.com%2Falbum%2Fpw%2Fphoto%2FMon_1108%2F43818_4e6b131253148814abe6108dc3f51.jpg',
      alt: '东京大学',
      title:'东大诞生于1877年，由“东京开成学校”与“东京医学校”在明治维新期间合并改制而成',
      callback: () => {this.goDetail()}},
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516183064926&di=f6346de9660f24053f81172b5a9cf21d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dfabb4c951bdfa9ece9235e540ab99d76%2F8b13632762d0f70399e7bb5502fa513d2797c5e5.jpg',
      alt: '江之岛',
      title:'江之岛位于日本神奈川县藤泽市境内。古时只有在退潮时，才能显出一条从对面湘南海岸通往此岛的沙嘴',
      callback: () => {this.goDetail()}},
    {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516183008087&di=eee69bc7238a903cfdac88dc7c4bbd33&imgtype=0&src=http%3A%2F%2Fjlweddingstudio.com%2Fwp-content%2Fuploads%2F2013%2F12%2FDSC4597-2%2528pp_w1168_h799%2529.jpg',
      alt: '镰仓高校前',
      title:'镰仓高校前站是一由江之岛电铁（江之电）所经营的铁路车站，位于日本神奈川县镰仓市境内，是江之岛电铁线沿线的一个无人车站',
      callback: () => {this.goDetail()}}
  ];
  selectImg : any;
  isShow : boolean = false;
  tabItems : any[] = [];
  currentTab : string;
    images2 : any[] = [
    {id:'2',
      src:'https://z1.muscache.cn/im/pictures/1098f911-a27b-4075-8fad-90c184fbb66e.jpg?aki_policy=large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}},
    {id:'3',
      src:'https://z1.muscache.cn/im/pictures/56d7f836-150f-497f-9043-b12abde1a8b3.jpg?aki_policy=large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}},
    {id:'4',
      src:'https://z1.muscache.cn/im/pictures/dda1a265-5c27-44aa-bc06-07e5aef915ad.jpg?aki_policy=large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}},
    {id:'5',
      src:'https://z1.muscache.cn/im/pictures/4a1f9411-fef7-4cfe-9743-d797c445233e.jpg?aki_policy=large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}}
  ];
  images3 : any[] = [
    {id:'1',src:'https://z1.muscache.cn/im/pictures/4fe31a5a-41fb-490f-9aa0-e0b7ce1f706f.jpg?aki_policy=xx_large',
      alt: '1',
      title:'',
      callback: () => {this.goDetail()}},
    {id:'2',src:'https://z1.muscache.cn/im/pictures/1098f911-a27b-4075-8fad-90c184fbb66e.jpg?aki_policy=large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}},
    {id:'3',
      src:'https://z1.muscache.cn/im/pictures/56d7f836-150f-497f-9043-b12abde1a8b3.jpg?aki_policy=large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}},
    { id:'4',
      src:'https://z1.muscache.cn/im/pictures/dda1a265-5c27-44aa-bc06-07e5aef915ad.jpg?aki_policy=large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}},
    {id:'5',
      src:'https://z1.muscache.cn/im/pictures/4a1f9411-fef7-4cfe-9743-d797c445233e.jpg?aki_policy=large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}},
    {id:'6',
      src:'https://z1.muscache.cn/im/pictures/4a1f9411-fef7-4cfe-9743-d797c445233e.jpg?aki_policy=large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}},
    { id:'7',
      src:'https://z1.muscache.cn/im/pictures/2e1ccf9f-c91b-46f7-acf4-b7396dee225e.jpg?aki_policy=x_large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}},
    {id:'8',
      src:'https://z1.muscache.cn/im/pictures/09af23e6-1395-4b72-87f0-a7728ad8cb31.jpg?aki_policy=x_large',
      alt: '',
      title:'',
      callback: () => {this.goDetail()}}
  ];

  constructor() {
    this.tabItems = [{name:'html',label:'html',isActive:true,isDisable:false},
      {name:'typescript',label:'typescript',isActive:false,isDisable:false}];
    this.currentTab= this.tabItems[0].label;
  }


  closeModal(){
    this.selectImg = undefined;
    this.isShow = false;
  }

  openModal(item : any){
    this.selectImg = item;
    this.isShow = true;
  }

  goDetail() {
    window.alert("Go to image detail!")
  }
}
