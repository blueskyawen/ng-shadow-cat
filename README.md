# Ng-Shadow-Cat
Ng-Shadow-Cat是一套前端组件库的Angular实现，封装了常用的一些UI组件,珊格系统和模式
假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了Angular的基本开发方式，便可使用

## 下载方式

    npm install ng-shadow-cat-d --save-dev

## 文档-Demo

[ng-shadow-cat](http://blueskyawen.com/ng-shadow-cat)

## 使用方式

#### 1. 安装Cli

    npm install -g @angular/cli

> 请务必确认Node.js的版本是v8.10或以上，建议升级至最新版本的@angular/cli

查看cli脚手架版本，有版本信息呈现则安装成功

    ng -v

#### 2. 新建angular项目

    ng new my-app

#### 3. 下载Ng-Shadow-Cat库

    npm install ng-shadow-cat-d --save-dev

#### 4. 配置模块
在app.module.ts配置ng-shadow-cat-d

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppRoutingModule } from './app-routing.module';
    import { LibModule } from 'ng-shadow-cat-d';

    import { AppComponent } from './app.component';

    @NgModule({
      imports: [
        BrowserModule,AppRoutingModule,LibModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule {};

#### 5. 配置样式
更新.angular-cli.json配置

    "styles": [
        "./node_modules/ng-shadow-cat-d/ng-shadow-cat-d.css"
    ],
    "scripts": [
    ],

