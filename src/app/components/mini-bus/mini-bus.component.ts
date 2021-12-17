import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { ServiceService } from 'src/app/services/service.service';
import { LoderStatus } from 'src/app/store/actions/loader.actions';
import { ApiBusLine } from '../../services/models/bus-line.model';
import * as MiniBusActions from '../../store/actions/mini-bus.actions';
import {
  getLoader,
  getMiniBusLineError,
  getMiniBusLineSuccess,
} from './../../store/selectors/mini-bus.selectors';

@Component({
  selector: 'app-mini-bus',
  templateUrl: './mini-bus.component.html',
  styleUrls: ['./mini-bus.component.scss'],
})
export class MiniBusComponent implements OnInit {
  miniBusLine$!: Observable<ApiBusLine[]>;
  miniBusLine!: ApiBusLine[];

  miniBusLineErro$!: Observable<string>;
  miniBusErro!: string;

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
    this.miniBusLine$ = this.store.select(getMiniBusLineSuccess);
    this.miniBusLineErro$ = this.store.select(getMiniBusLineError);
    this.isLoading$ = this.store.select(getLoader);
  }

  ngOnInit(): void {
    this.tableConfig();
    this.valorMiniBusSelector();
    this.miniBusLineInfos();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  miniBusLineInfos() {
    this.store.dispatch(LoderStatus({ status: true }));
    this.store.dispatch(MiniBusActions.MiniBuss());
  }
  valorMiniBusSelector() {
    this.subscription.push(
      this.miniBusLine$.subscribe(
        (data) => {
          this.miniBusLine = data;
          this.dtTrigger.next();
        },
        (erro) => {
          this.miniBusErro = erro;
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
