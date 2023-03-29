import {Coordinates} from "../../models/bus-coordinates";

export class TransformObjsArray {

  public transformArray(object: any) {
    let arrayInfo: Coordinates[] = [];
    let nameItinerary: string = '';

    for (let key in object) {
      switch (key) {
        case 'idlinha':
          break;
        case 'nome':
          nameItinerary = object[key];
          break;
        case 'codigo':
          break;
        default:
          arrayInfo.push(object[key]);
          break;
      }
    }
    return { arrayInfo, nameItinerary };
  }
}
