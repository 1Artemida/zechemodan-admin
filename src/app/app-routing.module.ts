import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/tabs/main/main.component';
import { SpendComponent } from './components/tabs/spend/spend.component';
import { PlanComponent } from './components/tabs/plan/plan.component';
import { BusComponent } from './components/tabs/bus/bus.component';
import { HotelComponent } from './components/tabs/hotel/hotel.component';
import { ReportComponent } from './components/tabs/report/report.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/main',
  pathMatch: 'full'
},{
  path: 'main',
  component: MainComponent
}, {
  path: 'spend',
  component: SpendComponent,
},{
  path: 'plan',
  component: PlanComponent,
  },{
  path: 'bus',
  component: BusComponent,
  },{
  path: 'hotel',
  component: HotelComponent,
  },{
  path: 'report',
  component: ReportComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
