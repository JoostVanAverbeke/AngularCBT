import {provideRouter, RouterConfig} from "@angular/router";

import {StartTransfusionComponent} from "./components/transfusion/start.transfusion.component";
import {UpdateTransfusionComponent} from "./components/transfusion/update.transfusion.component";
import {EndTransfusionComponent} from "./components/transfusion/end.transfusion.component";
import {HelloWorldComponent} from "./components/hello_world";
import {AuthenticatedGuard} from "./services/authentication/authenticated.guard";
import {LoginComponent} from "./components/login/login.component";
import {BloodbagDetailComponent} from "./components/bloodbag/detail.component";

export const routes: RouterConfig = [
    {path: '', component: HelloWorldComponent, canActivate: [AuthenticatedGuard]},
    {path: 'start', component: StartTransfusionComponent, canActivate: [AuthenticatedGuard]},
    {path: 'update', component: UpdateTransfusionComponent, canActivate: [AuthenticatedGuard]},
    {path: 'end', component: EndTransfusionComponent, canActivate: [AuthenticatedGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'bloodbag/:barcode/detail', component: BloodbagDetailComponent, canActivate: [AuthenticatedGuard]},
    {path: '**', component: LoginComponent, canActivate: [AuthenticatedGuard]}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];