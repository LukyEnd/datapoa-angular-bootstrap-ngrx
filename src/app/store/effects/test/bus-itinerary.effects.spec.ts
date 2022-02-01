import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { BusItineraryEffects } from '../bus-itinerary.effects';

describe('BusItineraryEffects', () => {
  let actions$: Observable<any>;
  let effects: BusItineraryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusItineraryEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(BusItineraryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
