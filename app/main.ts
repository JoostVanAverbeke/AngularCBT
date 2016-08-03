import {bootstrap} from "@angular/platform-browser-dynamic";

import {CyberTrackComponent} from "./components/app.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";

import {LocationStrategy, HashLocationStrategy} from "@angular/common";

bootstrap(CyberTrackComponent, [
    APP_ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
