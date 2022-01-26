import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataTablesModule } from 'angular-datatables';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusLineComponent } from './components/bus-line/bus-line.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { MiniBusComponent } from './components/mini-bus/mini-bus.component';
import { CssBaseComponent } from './components/shared/css-base/css-base.component';
import { MenuBaseComponent } from './components/shared/menu-base/menu-base.component';
import { BusItineraryEffects } from './store/effects/bus-itinerary.effects';
import { BusLineEffects } from './store/effects/bus-line.effects';
import { MiniBusEffects } from './store/effects/mini-bus.effects';
import { reducers } from './store/reducers/root.reducers';

@NgModule({
  declarations: [
    AppComponent,
    BusLineComponent,
    ErrorsComponent,
    MiniBusComponent,
    ItineraryComponent,
    MenuBaseComponent,
    CssBaseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
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
