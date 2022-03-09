import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable, Subject, Subscription } from 'rxjs';

import { LoderStatus } from 'src/app/store/actions/loading.actions';
import { AppState } from 'src/app/store/state/app.state';

import { BusLineDetail } from '../../services/models/bus-line.model';
import * as MiniBusActions from '../../store/actions/mini-bus.actions';
import {
  getLoader,
  getMiniBusError,
  getMiniBusSuccess,
} from '../../store/selectors/mini-bus.selectors';

@Component({
  selector: 'app-mini-bus',
  templateUrl: './mini-bus.component.html',
  styleUrls: [
    './mini-bus.component.scss',
    '../shared/css-base/css-base.component.scss',
  ],
})
export class MiniBusComponent implements OnInit {
  miniBusLine$!: Observable<BusLineDetail[]>;
  miniBusLine!: BusLineDetail[];

  miniBusErro$!: Observable<string>;
  miniBusErro!: string;

  isLoading$!: Observable<boolean>;
  isLoading: boolean = false;

  subscription: Subscription[] = [];

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private router: Router, private store: Store<AppState>) {
    this.miniBusLine$ = this.store.select(getMiniBusSuccess);
    this.miniBusErro$ = this.store.select(getMiniBusError);
    this.isLoading$ = this.store.select(getLoader);
  }

  ngOnInit(): void {
    this.actionsPageInitial();
    this.dataMiniBus();
    this.tableConfig();
  }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  actionsPageInitial() {
    this.store.dispatch(LoderStatus());
    this.store.dispatch(MiniBusActions.MiniBuss());
  }

  dataMiniBus() {
    this.subscription.push(
      this.miniBusLine$.subscribe((data) => {
        this.miniBusLine = data;
        this.dtTrigger.next();
      })
    );
    this.subscription.push(
      this.miniBusErro$.subscribe((erro) => {
        this.miniBusErro = erro;
        this.dtTrigger.next();
      })
    );
    this.subscription.push(
      this.isLoading$.subscribe((loadin) => {
        this.isLoading = loadin;
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
