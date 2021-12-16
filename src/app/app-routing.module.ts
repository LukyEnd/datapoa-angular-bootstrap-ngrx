import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusLineComponent } from './components/bus-line/bus-line.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';
import { MiniBusComponent } from './components/mini-bus/mini-bus.component';

const routes: Routes = [
  { path: '', component: BusLineComponent },
  { path: 'itinerary/:id', component: ItineraryComponent },
  { path: 'minibus', component: MiniBusComponent },
  { path: '**', component: ErrorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
