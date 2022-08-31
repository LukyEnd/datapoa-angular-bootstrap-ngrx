import { Coordinates } from './bus-coordinates';

export class BusItinerary {
  constructor(
    public idlinha: number,
    public nome: string,
    public codigo: string,
    public key: Coordinates
  ) {}
}
