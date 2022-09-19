import { DataTablesModule } from 'angular-datatables';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusItineraryEffects } from './store/effects/bus-itinerary.effects';
import { BusLineEffects } from './store/effects/bus-line.effects';
import { MiniBusEffects } from './store/effects/mini-bus.effects';
import { reducers } from './store/reducers/root.reducers';
import { BusLineComponent } from './data-poa/components/bus-line/bus-line.component';
import { CssBaseComponent } from './data-poa/components/shared/css-base/css-base.component';
import { HeaderComponent } from './data-poa/components/shared/header/header.component';
import { ItineraryComponent } from './data-poa/components/itinerary/itinerary.component';
import { MiniBusComponent } from './data-poa/components/mini-bus/mini-bus.component';
import { ErrorUrlComponent } from './data-poa/components/shared/errors/error-url/error-url.component';
import { ErrorApiComponent } from './data-poa/components/shared/errors/error-api/error-api.component';

@NgModule({
  declarations: [
    AppComponent,
    BusLineComponent,
    MiniBusComponent,
    ItineraryComponent,
    HeaderComponent,
    CssBaseComponent,
    ErrorUrlComponent,
    ErrorApiComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule.forRoot(),
    StoreModule,
    EffectsModule.forRoot([
      BusLineEffects,
      MiniBusEffects,
      BusItineraryEffects,
    ]),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
