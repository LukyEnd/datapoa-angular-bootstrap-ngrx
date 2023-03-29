import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {RouterId} from "./router-id";

export class TableConfig extends RouterId{
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>();

  constructor(public router: Router) {
    super(router);
  }

  public tableConfig(): void {
    this.dtOptions = {
      pageLength: 8,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
  }
}
