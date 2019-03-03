import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BargraphComponent } from './bargraph/bargraph.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AppComponent,
    BargraphComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
