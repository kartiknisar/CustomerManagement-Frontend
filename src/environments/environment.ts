// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBb4RcnLohr3SY77Bkdi_RFkbGHiTODDNI",
    authDomain: "customerconnect-68b2b.firebaseapp.com",
    projectId: "customerconnect-68b2b",
    storageBucket: "customerconnect-68b2b.appspot.com",
    messagingSenderId: "242857581309",
    appId: "1:242857581309:web:ee0867dff12a20e88abc94",
    measurementId: "G-6SKE0NX322"
  }
};
// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
