import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoderStatus } from 'src/app/store/actions/loading.actions';
import { getBusLineSuccess } from 'src/app/store/selectors/bus-line.selectors';
import { AppState } from 'src/app/store/state/app.state';
import { BusLineDetail } from '../../models/bus-line.model';
import * as BusActions from '../../../store/actions/bus-line.actions';
import {
  getBusLineError,
  getLoader,
} from '../../../store/selectors/bus-line.selectors';

@Component({
  selector: 'app-bus-line',
  templateUrl: './bus-line.component.html',
  styleUrls: [
    './bus-line.component.scss',
    '../shared/css-base/css-base.component.scss',
  ],
})
export class BusLineComponent implements OnInit, OnDestroy {
  public busLine$: Observable<BusLineDetail[]>;
  public busLine!: BusLineDetail[];
  public busLineError$: Observable<string>;
  public busLineError!: string;
  public isLoading$: Observable<boolean>;

  public subscription: Subscription[] = [];
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  constructor(private router: Router, private store: Store<AppState>) {
    this.busLine$ = this.store.select(getBusLineSuccess);
    this.busLineError$ = this.store.select(getBusLineError);
    this.isLoading$ = this.store.select(getLoader);
  }

  public ngOnInit(): void {
    this.actionsPageInitial();
    this.dataLineBus();
    this.tableConfig();
  }

  public ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  public actionsPageInitial(): void {
    this.store.dispatch(LoderStatus());
    this.store.dispatch(BusActions.loadBusLines());
  }

  public dataLineBus(): void {
    this.subscription.push(
      this.busLine$.subscribe((data) => {
        this.busLine = data;
        this.dtTrigger.next();
      })
    );
    this.subscription.push(
      this.busLineError$.subscribe((error) => {
        this.busLineError = error;
        this.dtTrigger.next();
      })
    );
  }

  public tableConfig(): void {
    this.dtOptions = {
      pageLength: 8,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }

  public setNumberId(id: number): void {
    this.router.navigate(['/itinerary', id]).then((r) => {
      return r;
    });
  }
}
