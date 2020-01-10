// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  products_api: 'https://platzi-store.herokuapp.com/products/',
  firebaseConfig: {
    apiKey: 'AIzaSyBs7sxtCYR4mwveKkR9ZbxT-7gBvwPeVJg',
    authDomain: 'my-store-9082e.firebaseapp.com',
    databaseURL: 'https://my-store-9082e.firebaseio.com',
    projectId: 'my-store-9082e',
    storageBucket: 'my-store-9082e.appspot.com',
    messagingSenderId: '858654136188',
    appId: '1:858654136188:web:0852de75990b6f1fb076f9'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
