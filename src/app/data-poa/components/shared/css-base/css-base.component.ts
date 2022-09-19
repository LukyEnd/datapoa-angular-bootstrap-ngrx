import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-css-base',
  templateUrl: './css-base.component.html',
  styleUrls: ['./css-base.component.scss'],
})
export class CssBaseComponent {
  @Input() public busLineError: string;

  constructor() {
    this.busLineError = '';
  }
}
