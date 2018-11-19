/**
 * Created by liuxuwen on 18-5-28.
 */
import { NgModule }      from '@angular/core';
import {CommonModule}      from '@angular/common';
import {LibModule} from '../lib/lib.module';

import {LoadingComponent} from './loading/loading.component';
import {TabComponent} from './tab/tab.component';
import {ButtonComponent} from './button/button.component';
import {MessageComponent} from './message/message.component';
import {ToTopComponent} from './toTop/toTop.component';
import {ToolTipComponent} from './toolTip/toolTip.component';
import {HelpComponent} from './help/help.component';
import {BreadCrumbComponent} from './breadcrumb/breadcrumb.component';
import {PaginationComponent} from './pagination/pagination.component';
import {SwitchComponent} from './switch/switch.component';
import {RateComponent} from './rate/rate.component';
import {RadioComponent} from './radio/radio.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {CollapseComponent} from './collapse/collapse.component';
import {RangeslideComponent} from './rangeSlide/rangeslide.component';
import {ProgressComponent} from './progress/progress.component';
import {ProportionComponent} from './proportion/proportion.component';
import {DialogComponent} from './dialog/dialog.component';
import {StepComponent} from './step/step.component';
import {SelectComponent} from './select/select.component';
import {MutilSelectComponent} from './mutil-select/mutil-select.component';
import {CarouselComponent} from './carousel/carousel.component';
import {TransferComponent} from './transfer/transfer.component';
import {TreeComponent} from './tree/tree.component';
import {InputComponent} from './input/input.component';
import {GridComponent} from './grid/grid.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {AlertComponent} from './alert/alert.component';
import {LabelComponent} from './label/label.component';
import {CardComponent} from './card/card.component';
import {NavbarComponent} from './navbar/navbar.component';
import {PageHeaderComponent} from './pageHeader/page-header.component';
import {PagerComponent} from './pager/pager.component';
import {ThumbImgComponent} from './thumbImg/thumb-img.component';
import {BadgeComponent} from './badge/badge.component';
import {ListGroupComponent} from './list-group/list-group.component';
import {AboutNgCatComponent} from './about-ngcat/about-ngcat.component';
import {LayoutComponent} from './layout/layout.component';
import {QuickStartComponent} from './quick-start/quick-start.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {MenuComponent} from './menu/menu.component';
import {AvaterComponent} from './avater/avater.component';
import {MsgEifComponent} from './msg-eif/msg-eif.component';
import {SkeletonComponent} from './skeleton/skeleton.component';
import {NumberInputComponent} from './number-input/number-input.component';
import {AffixComponent} from './affix/affix.component';
import {FormComponent} from './form/form.component';

@NgModule({
  imports: [CommonModule,LibModule],
  declarations: [LoadingComponent,TabComponent,ButtonComponent,MessageComponent,ToTopComponent,
    ToolTipComponent,HelpComponent,BreadCrumbComponent,PaginationComponent,SwitchComponent,
    RateComponent,RadioComponent,CheckboxComponent,CollapseComponent,RangeslideComponent,
    ProgressComponent,ProportionComponent,DialogComponent,StepComponent,SelectComponent,
    MutilSelectComponent,CarouselComponent,TransferComponent,TreeComponent,InputComponent,
    GridComponent,DropdownComponent,AlertComponent,LabelComponent,CardComponent,
    NavbarComponent,PageHeaderComponent,PagerComponent,ThumbImgComponent,BadgeComponent,
    ListGroupComponent,AboutNgCatComponent,LayoutComponent,QuickStartComponent,BarChartComponent,
    PieChartComponent,MenuComponent,AvaterComponent,MsgEifComponent,SkeletonComponent,
    NumberInputComponent,AffixComponent,FormComponent],
  exports:    [ LoadingComponent,TabComponent,ButtonComponent,MessageComponent,ToTopComponent,
    ToolTipComponent,HelpComponent,BreadCrumbComponent,PaginationComponent,SwitchComponent,
    RateComponent,RadioComponent,CheckboxComponent,CollapseComponent,RangeslideComponent,
    ProgressComponent,ProportionComponent,DialogComponent,StepComponent,SelectComponent,
    MutilSelectComponent,CarouselComponent,TransferComponent,TreeComponent,InputComponent,
    GridComponent,DropdownComponent,AlertComponent,LabelComponent,CardComponent,
    NavbarComponent,PageHeaderComponent,PagerComponent,ThumbImgComponent,BadgeComponent,
    ListGroupComponent,AboutNgCatComponent,LayoutComponent,QuickStartComponent,BarChartComponent,
    PieChartComponent,MenuComponent,AvaterComponent,MsgEifComponent,SkeletonComponent,
    NumberInputComponent,AffixComponent,FormComponent]
})
export class DemoModule { }
