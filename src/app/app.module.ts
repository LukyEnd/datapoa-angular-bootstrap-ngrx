import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusLineComponent } from './components/bus-line/bus-line.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { MiniBusComponent } from './components/mini-bus/mini-bus.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { MenuBaseComponent } from './components/shared/menu-base/menu-base.component';

@NgModule({
  declarations: [
    AppComponent,
    BusLineComponent,
    BasePageComponent,
    ErrorsComponent,
    MiniBusComponent,
    ItineraryComponent,
    MenuBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
