import { Observable, Subscription } from 'rxjs';
import { getChangeTheme } from 'src/app/store/selectors/change-theme.selectors';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ChangeTheme from '../../../store/actions/change-theme.actions';
import { AppState } from '../../../store/state/app.state';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss', '../css-base/css-base.component.scss'],
})
export class MenuComponent implements OnInit, OnDestroy {
  changeTheme$!: Observable<string>;
  changeTheme: string = 'dark-theme';

  subscription: Subscription[] = [];

  constructor(private store: Store<AppState>) {
    this.changeTheme$ = this.store.select(getChangeTheme);
  }

  ngOnInit(): void {
    this.dataChangePage();
  }

  ngOnDestroy(): void {
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  dataChangePage() {
    this.subscription.push(
      this.changeTheme$.subscribe((data) => {
        if (data == 'light-theme') {
          document.body.classList.toggle(data);
          this.changeTheme = data;
        } else if (data == 'dark-theme') {
          document.body.classList.remove('light-theme');
          this.changeTheme = data;
        }
      })
    );
  }

  themeLight(): void {
    this.store.dispatch(ChangeTheme.loadChangeThemes({ theme: 'light-theme' }));
  }

  themeDark() {
    this.store.dispatch(ChangeTheme.loadChangeThemes({ theme: 'dark-theme' }));
  }
}
