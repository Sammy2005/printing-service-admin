// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    hmr: false,
    // base_url: 'http://10.176.16.176:8635',
    base_url: 'https://ikibhala.turnkeyafrica.com/api/alerts',
    // base_notifications_url: 'http://10.176.16.80:8852'
    base_notifications_url: 'https://ikibhala.turnkeyafrica.com/staging/v1/alerts'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
