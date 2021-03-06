/**
 * Created by liuxuwen on 18-5-28.
 */
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNorFoundComponent }   from './page-not-found.component';
import { LoadingComponent,TabComponent,ButtonComponent,MessageComponent,ToTopComponent,
  ToolTipComponent,HelpComponent,BreadCrumbComponent,PaginationComponent,SwitchComponent,
  RateComponent,RadioComponent,CheckboxComponent,CollapseComponent,RangeslideComponent,
  ProgressComponent,ProportionComponent,DialogComponent,StepComponent,SelectComponent,
  MutilSelectComponent,CarouselComponent,TransferComponent,TreeComponent,InputComponent,
  GridComponent,DropdownComponent,AlertComponent,LabelComponent,CardComponent,
  NavbarComponent,PageHeaderComponent,PagerComponent,ThumbImgComponent,BadgeComponent,
  ListGroupComponent,AboutNgCatComponent,LayoutComponent,QuickStartComponent,
  BarChartComponent,PieChartComponent,MenuComponent,AvaterComponent,MsgEifComponent,
  SkeletonComponent,NumberInputComponent,AffixComponent,FormComponent,AffixDemo1Component,
  FormInstanceComponent,PhotoViewComponent,YearSelectorComponent,TimeSelectorComponent,
  MonthSelectorComponent,DateTimeSelectorComponent,DateSelectorComponent,
  RangeDateSelectorComponent,DropDrawerComponent,ExhibitComponent,ResizeAreaComponent} from './demo/index';

const appRoutes: Routes = [
  { path: 'components',
    //component: LoadingComponent,
    children: [
      { path: 'loading', component: LoadingComponent },
      { path: 'tab', component: TabComponent },
      { path: 'button', component: ButtonComponent },
      { path: 'message', component: MessageComponent },
      { path: 'toTop', component: ToTopComponent },
      { path: 'toolTip', component: ToolTipComponent },
      { path: 'help', component: HelpComponent },
      { path: 'breadcrumb', component: BreadCrumbComponent },
      { path: 'pagination', component: PaginationComponent },
      { path: 'switch', component: SwitchComponent },
      { path: 'rate', component: RateComponent },
      { path: 'radio', component: RadioComponent },
      { path: 'checkbox', component: CheckboxComponent },
      { path: 'collapse', component: CollapseComponent },
      { path: 'rangeslide', component: RangeslideComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'proportion', component: ProportionComponent },
      { path: 'dialog', component: DialogComponent },
      { path: 'step', component: StepComponent },
      { path: 'select', component: SelectComponent },
      { path: 'mutilselect', component: MutilSelectComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'yearSelector', component: YearSelectorComponent },
      { path: 'monthSelector', component: MonthSelectorComponent },
      { path: 'timeSelector', component: TimeSelectorComponent },
      { path: 'dateSelector', component: DateSelectorComponent },
      { path: 'datetimeSelector', component: DateTimeSelectorComponent },
      { path: 'rangedateSelector', component: RangeDateSelectorComponent },
      { path: 'tree', component: TreeComponent },
      { path: 'input', component: InputComponent },
      { path: 'dropdown', component: DropdownComponent},
      { path: 'alert', component: AlertComponent},
      { path: 'label', component: LabelComponent},
      { path: 'pager', component: PagerComponent},
      { path: 'barchart', component: BarChartComponent},
      { path: 'piechart', component: PieChartComponent},
      { path: 'badge', component: BadgeComponent},
      { path: 'avater', component: AvaterComponent},
      { path: 'msgEif', component: MsgEifComponent},
      { path: 'skeleton', component: SkeletonComponent},
      { path: 'numberInput', component: NumberInputComponent},
      { path: 'drawer', component: DropDrawerComponent},
      { path: 'exhibit', component: ExhibitComponent},
      { path: 'resize', component: ResizeAreaComponent}
    ]
  },
  {
    path: 'pattern',
    //component: NavbarComponent,
    children: [
      { path: 'card', component: CardComponent},
      { path: 'navbar', component: NavbarComponent},
      { path: 'pageHeader', component: PageHeaderComponent},
      { path: 'thumbimg', component: ThumbImgComponent},
      { path: 'listGroup', component: ListGroupComponent},
      { path: 'flexLayout', component: LayoutComponent},
      { path: 'menu', component: MenuComponent},
      { path: 'affix', component: AffixComponent},
      { path: 'affix/demo1', component: AffixDemo1Component},
      { path: 'form', component: FormComponent},
      { path: 'formInstance', component: FormInstanceComponent},
      { path: 'photoView', component: PhotoViewComponent}
    ]
  },
  {
    path: 'about',
    //component: GridComponent,
    children: [
      { path: 'about', component: AboutNgCatComponent},
      { path: 'quickstart', component: QuickStartComponent},
      { path: 'grid', component: GridComponent}
    ]
  },
  { path: '',   redirectTo: '/about/about', pathMatch: 'full' },
  { path: '**', component: PageNorFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
