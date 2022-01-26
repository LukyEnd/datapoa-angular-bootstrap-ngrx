// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  urlBus:
    'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=',
  urlItinerary:
    'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=',
  mapTokenKey:
    'pk.eyJ1IjoibHVreWVuZCIsImEiOiJja3lvdWVtb2MwMDl1MnlwZTB5bTY2eXF4In0.A3Gl_7ppd9vHGtrmg3d7Aw',
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
