import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoderStatus } from 'src/app/store/actions/loader.actions';
import { getBusLineSuccess } from 'src/app/store/selectors/bus-line.selectors';
import { ApiBusLine } from '../../services/models/bus-line.model';
import * as BusActions from '../../store/actions/bus-line.actions';
import {
  getBusLineError,
  getLoader,
} from './../../store/selectors/bus-line.selectors';

@Component({
  selector: 'app-bus-line',
  templateUrl: './bus-line.component.html',
  styleUrls: ['./bus-line.component.scss'],
})
export class BusLineComponent implements OnInit, OnDestroy {
  busLine$!: Observable<ApiBusLine[]>;
  busLine!: ApiBusLine[];

  busLineErro$!: Observable<string>;
  busLineErro!: string;

  isLoading$!: Observable<boolean>;
  isLoading = false;

  subscription: Subscription[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private router: Router, private store: Store) {
    this.busLine$ = this.store.select(getBusLineSuccess);
    this.busLineErro$ = this.store.select(getBusLineError);
    this.isLoading$ = this.store.select(getLoader);
  }

  ngOnInit(): void {
    this.busLinePage();
    this.dataLineBus();
    this.tableConfig();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  busLinePage() {
    this.store.dispatch(LoderStatus({ status: true }));
    this.store.dispatch(BusActions.loadBusLines());
  }

  dataLineBus() {
    this.subscription.push(
      this.busLine$.subscribe((data) => {
        this.busLine = data;
        this.dtTrigger.next();
      })
    );
    this.subscription.push(
      this.busLineErro$.subscribe((erro) => {
        this.busLineErro = erro;
        this.dtTrigger.next();
      })
    );
  }

  tableConfig() {
    this.dtOptions = {
      pageLength: 8,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }

  setNumberId(id: number) {
    this.router.navigate(['/itinerary', id]);
  }
}
