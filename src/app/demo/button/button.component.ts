/**
 * Created by liuxuwen on 18-5-30.
 */
import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'demo-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  tabItems2 : any[] = [];
  currentTab2 : string;
  BseUrl = 'http://127.0.0.1:3000';

  constructor(private http: HttpClient) {
    this.tabItems2 = [{name:'html',label:'html',isActive:true,isDisable:false}];
    this.currentTab2= this.tabItems2[0].label
  }

  getUsers() {
    this.http.get(this.BseUrl+'/listUsers').subscribe(res => {
      console.log(res);
      console.log(JSON.stringify(res));
    });
  }
  addUsers() {
    this.http.post(this.BseUrl+'/addUser',{}).subscribe(res => {
      console.log(res);
      console.log(JSON.stringify(res));
    });
  }
  delUsers() {
    this.http.delete(this.BseUrl+'/deleteUser/user2',{}).subscribe(res => {
      console.log(res);
      console.log(JSON.stringify(res));
    });
  }
  getOneUser() {
    this.http.get(this.BseUrl+'/2',{}).subscribe(res => {
      console.log(res);
      console.log(JSON.stringify(res));
    });
  }
}
