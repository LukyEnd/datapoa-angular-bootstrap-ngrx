import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
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

  busLineError$!: Observable<string>;
  busLineErro!: string;

  isLoading$!: Observable<boolean>;
  isLoading = false;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  subscription: Subscription[] = [];

  constructor(
    private serv: ServiceService,
    private router: Router,
    private store: Store
  ) {
    this.busLine$ = this.store.select(getBusLineSuccess);
    this.busLineError$ = this.store.select(getBusLineError);
    this.isLoading$ = this.store.select(getLoader);
  }

  ngOnInit(): void {
    this.valorBusSelector();
    this.tableConfig();
    this.busLineInfos();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  //-----------------------------------------------------------------------------
  busLineInfos() {
    this.store.dispatch(LoderStatus({ status: true }));
    this.store.dispatch(BusActions.loadBusLines());
  }
  valorBusSelector() {
    this.subscription.push(
      this.busLine$.subscribe(
        (data) => {
          this.busLine = data;
          this.dtTrigger.next();
        },
        (erro) => {
          this.busLineErro = erro;
        }
      )
    );
  }

  tableConfig() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }

  setNumberId(id: number) {
    this.router.navigate(['/itinerary', id]);
  }
}
