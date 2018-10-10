/**
 * Created by liuxuwen on 18-5-27.
 */
import { NgModule }      from '@angular/core';
import {CommonModule}      from '@angular/common';

import {SidebarAboutComponent} from './sidebar-about.component';
import {SidebarContorlComponent} from './sidebar-contorl.component';
import {SidebarPatternComponent} from './sidebar-pattern.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SidebarAboutComponent, SidebarContorlComponent,SidebarPatternComponent],
  exports:    [ SidebarAboutComponent, SidebarContorlComponent,SidebarPatternComponent ]
})
export class SidebarModule { }
