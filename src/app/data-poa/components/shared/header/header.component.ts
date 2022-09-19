import { Observable, Subscription } from 'rxjs';
import { getChangeTheme } from 'src/app/store/selectors/change-theme.selectors';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ChangeTheme from '../../../../store/actions/change-theme.actions';
import { AppState } from '../../../../store/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../css-base/css-base.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public changeTheme$: Observable<string>;
  public changeTheme: string;

  public subscription: Subscription[] = [];

  constructor(private store: Store<AppState>) {
    this.changeTheme = 'dark-theme';
    this.changeTheme$ = this.store.select(getChangeTheme);
  }

  public ngOnInit(): void {
    this.dataChangePage();
  }

  public ngOnDestroy(): void {
    this.subscription.forEach((interrupted) => interrupted.unsubscribe());
  }

  public dataChangePage(): void {
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

  public selectTheme(select: string): void {
    this.store.dispatch(ChangeTheme.loadChangeThemes({ theme: select}));
  }
}
