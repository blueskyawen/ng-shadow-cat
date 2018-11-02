/**
 * Created by liuxuwen on 18-5-28.
 */
import { NgModule }      from '@angular/core';
import {CommonModule}      from '@angular/common';

import {NcTabComponent} from './nc-tab/nc-tab.component';
import {NcLoadingComponent} from './nc-loading/nc-loading.component';
import {NcButtonComponent} from './nc-button/nc-button.component';
import {NcMessageComponent} from './nc-message/nc-message.component';
import {NcToTopComponent} from './nc-toTop/nc-toTop.component';
import {NcToolTipComponent} from './nc-tooltip/nc-tooltip.component';
import {NcHelpComponent} from './nc-help/nc-help.component';
import {NcBreadcrumbComponent} from './nc-breadcrumb/nc-breadcrumb.component';
import {NcPaginationComponent} from './nc-pagination/nc-pagination.component';
import {NcCheckboxComponent} from './nc-checkbox/nc-checkbox.component';
import {NcRadioComponent} from './nc-radio/nc-radio.component';
import {NcSwitchComponent} from './nc-switch/nc-switch.component';
import {NcRateComponent} from './nc-rate/nc-rate.component';
import {NcCollapseComponent} from './nc-collapse/nc-collapse.component';
import {NcPanelComponent} from './nc-collapse/nc-panel.component';
import {NcRangeSlideComponent} from './nc-rangeslide/nc-rangeslide.component';
import {NcProgressComponent} from './nc-progress/nc-progress.component';
import {NcProportionComponent} from './nc-proportion/nc-proportion.component';
import {NcDialogComponent} from './nc-dialog/nc-dialog.component';
import {NcStepComponent} from './nc-step/nc-step.component';
import {NcSelectComponent} from './nc-select/nc-select.component';
import {NcMutilSelectComponent} from './nc-mutil-select/nc-mutil-select.component';
import {NcCarouselComponent} from './nc-carousel/nc-carousel.component';
import {NcTransferComponent} from './nc-transfer/nc-transfer.component';
import {NcTreeComponent} from './nc-tree/nc-tree.component';
import {NcInputComponent,NcFormGroupComponent,NcFormLabelComponent} from './nc-input/index';
import {NcDropdownComponent} from './nc-dropdown/nc-dropdown.component';
import {NcAlertComponent} from './nc-alert/nc-alert.component';
import {NcLabelComponent} from './nc-label/nc-label.component';
import {NcPagerComponent} from './nc-pager/nc-pager.component';
import {NcBarChartComponent} from './nc-bar-chart/nc-bar-chart.component';
import {NcPieChartComponent} from './nc-pie-chart/nc-pie-chart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NcTabComponent,NcLoadingComponent,NcButtonComponent,NcMessageComponent,
    NcToTopComponent,NcToolTipComponent,NcHelpComponent,NcBreadcrumbComponent,NcPaginationComponent,
    NcCheckboxComponent,NcRadioComponent,NcSwitchComponent,NcRateComponent,NcCollapseComponent,
    NcPanelComponent,NcRangeSlideComponent,NcProgressComponent,NcProportionComponent,
    NcDialogComponent,NcStepComponent,NcSelectComponent,NcMutilSelectComponent,NcCarouselComponent,
    NcTransferComponent,NcTreeComponent,NcInputComponent,NcDropdownComponent,NcAlertComponent,
    NcLabelComponent,NcFormGroupComponent,NcFormLabelComponent,NcPagerComponent,NcBarChartComponent,
    NcPieChartComponent],
  exports:    [ NcTabComponent,NcLoadingComponent,NcButtonComponent,NcMessageComponent,
    NcToTopComponent,NcToolTipComponent,NcHelpComponent,NcBreadcrumbComponent,NcPaginationComponent,
    NcCheckboxComponent,NcRadioComponent,NcSwitchComponent,NcRateComponent,NcCollapseComponent,
    NcPanelComponent,NcRangeSlideComponent,NcProgressComponent,NcProportionComponent,
    NcDialogComponent,NcStepComponent,NcSelectComponent,NcMutilSelectComponent,NcCarouselComponent,
    NcTransferComponent,NcTreeComponent,NcInputComponent,NcDropdownComponent,NcAlertComponent,
    NcLabelComponent,NcFormGroupComponent,NcFormLabelComponent,NcPagerComponent,NcBarChartComponent,
    NcPieChartComponent]
})
export class LibModule { }
