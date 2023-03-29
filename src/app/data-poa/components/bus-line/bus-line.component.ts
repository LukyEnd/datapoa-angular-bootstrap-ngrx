import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {LoderStatus} from 'src/app/store/actions/loading.actions';
import {getBusLineSuccess} from 'src/app/store/selectors/bus-line.selectors';
import {AppState} from 'src/app/store/state/app.state';
import {BusLineDetail} from '../../models/bus-line.model';
import * as BusActions from '../../../store/actions/bus-line.actions';
import {getBusLineError, getLoader,} from '../../../store/selectors/bus-line.selectors';
import {TableConfig} from "../shared/table-config";

@Component({
  selector: 'app-bus-line',
  templateUrl: './bus-line.component.html',
  styleUrls: [
    './bus-line.component.scss',
    '../shared/css-base/css-base.component.scss',
  ],
})
export class BusLineComponent extends TableConfig implements OnInit, OnDestroy {
  public busLine$: Observable<BusLineDetail[]>;
  public busLine!: BusLineDetail[];
  public busLineError$: Observable<string>;
  public busLineError!: string;
  public isLoading$: Observable<boolean>;

  public subscription: Subscription[] = [];

  constructor(public router: Router, private store: Store<AppState>) {
    super(router);
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
}
