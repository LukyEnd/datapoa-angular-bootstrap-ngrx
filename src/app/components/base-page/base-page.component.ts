import { ServiceService } from '../../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss'],
})
export class BasePageComponent implements OnInit {
  constructor(private serv: ServiceService) {}

  ngOnInit(): void {}
}
