// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  firebaseConfig: {
    apiKey: "AIzaSyCSzVF2b2DNAnexLntYurQz-AKCbIiRpgw",
    authDomain: "halal-or-haram-c8c65.firebaseapp.com",
    databaseURL: "https://halal-or-haram-c8c65-default-rtdb.firebaseio.com",
    projectId: "halal-or-haram-c8c65",
    storageBucket: "halal-or-haram-c8c65.appspot.com",
    messagingSenderId: "88492909402",
    appId: "1:88492909402:web:57722c9a33299d8bee4963"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
import { Environment } from './interface';
