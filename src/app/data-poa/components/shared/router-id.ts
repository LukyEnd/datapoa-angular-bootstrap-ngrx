import {Router} from '@angular/router';

export class RouterId{

  constructor(public router: Router) {}

  public setNumberId(id: number): void {
    this.router.navigate(['/itinerary', id]).then((r) => {
      return r;
    });
  }
}
