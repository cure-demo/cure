// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  app_env: 'dev',
  environmentUrl: 'https://kidney-project.herokuapp.com/',


  firebase: {
    apiKey: "AIzaSyB0O1KQS-yX_j1xfXxQGNtx5mPfaGlKzMA",
    authDomain: "cure-demo.firebaseapp.com",
    databaseURL: "https://cure-demo.firebaseio.com",
    projectId: "cure-demo",
    storageBucket: "cure-demo.appspot.com",
    messagingSenderId: "539892362374",
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
