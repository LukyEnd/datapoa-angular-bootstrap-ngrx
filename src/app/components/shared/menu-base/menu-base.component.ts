import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-base',
  templateUrl: './menu-base.component.html',
  styleUrls: [
    './menu-base.component.scss',
    '../css-base/css-base.component.scss',
  ],
})
export class MenuBaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleDarkTheme(): void {
    document.body.classList.toggle('light-theme');
    // document.getElementById('tables').classList.toggle('light-theme');
  }
}
