import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { LoderStatus } from 'src/app/store/actions/loading.actions';
import { AppState } from 'src/app/store/state/app.state';
import { BusLineDetail } from '../../models/bus-line.model';
import * as MiniBusActions from '../../../store/actions/mini-bus.actions';
import {
  getLoader,
  getMiniBusError,
  getMiniBusSuccess,
} from '../../../store/selectors/mini-bus.selectors';

@Component({
  selector: 'app-mini-bus',
  templateUrl: './mini-bus.component.html',
  styleUrls: [
    './mini-bus.component.scss',
    '../shared/css-base/css-base.component.scss',
  ],
})
export class MiniBusComponent implements OnInit, OnDestroy {
  public miniBusLine$: Observable<BusLineDetail[]>;
  public miniBusLine!: BusLineDetail[];
  public miniBusError$: Observable<string>;
  public miniBusError!: string;
  public isLoading$: Observable<boolean>;

  public subscription: Subscription[] = [];
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  constructor(private router: Router, private store: Store<AppState>) {
    this.miniBusLine$ = this.store.select(getMiniBusSuccess);
    this.miniBusError$ = this.store.select(getMiniBusError);
    this.isLoading$ = this.store.select(getLoader);
  }

  public ngOnInit(): void {
    this.actionsPageInitial();
    this.dataMiniBus();
    this.tableConfig();
  }

  public ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  public actionsPageInitial(): void {
    this.store.dispatch(LoderStatus());
    this.store.dispatch(MiniBusActions.MiniBuss());
  }

  public dataMiniBus(): void {
    this.subscription.push(
      this.miniBusLine$.subscribe((data) => {
        this.miniBusLine = data;
        this.dtTrigger.next();
      })
    );
    this.subscription.push(
      this.miniBusError$.subscribe((error) => {
        this.miniBusError = error;
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
