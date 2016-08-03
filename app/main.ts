import {bootstrap} from "@angular/platform-browser-dynamic";
import {CyberTrackComponent} from "./components/app.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {AuthenticationService} from "./services/authentication/authentication.service";
import {AuthenticatedGuard} from "./services/authentication/authenticated.guard";
import {HTTP_PROVIDERS} from "@angular/http";

bootstrap(CyberTrackComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    AuthenticationService,
    AuthenticatedGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);
