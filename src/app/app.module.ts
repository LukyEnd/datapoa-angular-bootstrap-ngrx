import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusLineComponent } from './components/bus-line/bus-line.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { MiniBusComponent } from './components/mini-bus/mini-bus.component';
import { MenuBaseComponent } from './components/shared/menu-base/menu-base.component';

@NgModule({
  declarations: [
    AppComponent,
    BusLineComponent,
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
