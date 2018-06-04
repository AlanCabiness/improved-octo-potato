// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAXsP-04H7zjgWnV0SX_YeuejKqndpdTFQ',
    authDomain: 'angular-auth-firebase-b6f72.firebaseapp.com',
    databaseURL: 'https://angular-auth-firebase-b6f72.firebaseio.com',
    projectId: 'angular-auth-firebase-b6f72',
    storageBucket: 'angular-auth-firebase-b6f72.appspot.com',
    messagingSenderId: '298933416900'
  }
};
