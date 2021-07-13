import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MainComponent } from './components/tabs/main/main.component';
import { SpendComponent } from './components/tabs/spend/spend.component';
import { PlanComponent } from './components/tabs/plan/plan.component';
import { BusComponent } from './components/tabs/bus/bus.component';
import { HotelComponent } from './components/tabs/hotel/hotel.component';
import { ReportComponent } from './components/tabs/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    MainComponent,
    SpendComponent,
    PlanComponent,
    BusComponent,
    HotelComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
