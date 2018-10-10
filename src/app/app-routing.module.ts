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
  ListGroupComponent} from './demo/index';

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
      { path: 'tree', component: TreeComponent },
      { path: 'input', component: InputComponent },
      { path: 'dropdown', component: DropdownComponent},
      { path: 'alert', component: AlertComponent},
      { path: 'label', component: LabelComponent}
    ]
  },
  {
    path: 'pattern',
    //component: NavbarComponent,
    children: [
      { path: 'card', component: CardComponent},
      { path: 'navbar', component: NavbarComponent},
      { path: 'pageHeader', component: PageHeaderComponent},
      { path: 'pager', component: PagerComponent},
      { path: 'thumbimg', component: ThumbImgComponent},
      { path: 'badge', component: BadgeComponent},
      { path: 'listGroup', component: ListGroupComponent}
    ]
  },
  {
    path: 'about',
    //component: GridComponent,
    children: [
      { path: 'about', component: GridComponent},
      { path: 'grid', component: GridComponent}
    ]
  },
  { path: '',   redirectTo: '/components/loading', pathMatch: 'full' },
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
