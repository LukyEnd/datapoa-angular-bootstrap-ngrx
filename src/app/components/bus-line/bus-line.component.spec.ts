import { DataTablesModule } from 'angular-datatables';
import { BusLineDetail } from 'src/app/services/models/bus-line.model';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import * as fromBus from '../../store/reducers/bus-line.reducer';
import { BusLineComponent } from './bus-line.component';

describe('Actions/Disparos do BusLineComponent', () => {
  let fixture: ComponentFixture<BusLineComponent>;
  let comp: BusLineComponent;
  let store: MockStore<fromBus.BusState>; /// Será ?
  let dispatchSpy;
  // let dataServiceMock: any;

  const initialState: BusLineDetail = {
    id: 1,
    codigo: '',
    nome: '',
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BusLineComponent],
      imports: [DataTablesModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    fixture = TestBed.createComponent(BusLineComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});

describe('Selectors do BusLineComponent', () => {
  let fixture: ComponentFixture<BusLineComponent>;
  let comp: BusLineComponent;
  let store: MockStore<fromBus.BusState>;
});
