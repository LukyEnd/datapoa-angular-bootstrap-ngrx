import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-api',
  templateUrl: './error-api.component.html',
  styleUrls: ['./error-api.component.scss'],
})
export class ErrorApiComponent {
  @Input() public busLineError: string;

  constructor() {
    this.busLineError = '';
  }
}
