import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [
    './menu.component.scss',
    '../css-format/css-format.component.scss',
  ],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  toggleDarkTheme(): void {
    document.body.classList.toggle('light-theme');
  }
}
