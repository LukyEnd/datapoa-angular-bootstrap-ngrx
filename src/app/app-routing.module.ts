import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusLineComponent } from './data-poa/components/bus-line/bus-line.component';
import { MiniBusComponent } from './data-poa/components/mini-bus/mini-bus.component';
import { ItineraryComponent } from './data-poa/components/itinerary/itinerary.component';
import { ErrorsComponent } from './data-poa/components/shared/errors/errors.component';

const routes: Routes = [
  { path: 'bus', component: BusLineComponent },
  { path: 'itinerary/:id', component: ItineraryComponent },
  { path: 'minibus', component: MiniBusComponent },
  { path: '**', component: ErrorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
