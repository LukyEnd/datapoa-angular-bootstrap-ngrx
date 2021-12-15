import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusLineComponent } from './components/bus-line/bus-line.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { BasePageComponent } from './components/base-page/base-page.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { MiniBusComponent } from './components/mini-bus/mini-bus.component';

@NgModule({
  declarations: [
    AppComponent,
    BusLineComponent,
    ItineraryComponent,
    BasePageComponent,
    ErrorsComponent,
    MiniBusComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
