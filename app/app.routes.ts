import { provideRouter, RouterConfig } from '@angular/router'
import {StartTransfusionComponent} from "./components/transfusion/start.transfusion.component"
import {UpdateTransfusionComponent} from "./components/transfusion/update.transfusion.component"
import {EndTransfusionComponent} from "./components/transfusion/end.transfusion.component"
import {HelloWorldComponent} from "./components/hello_world";

export const routes: RouterConfig = [
    { path: '', component: HelloWorldComponent },
    { path: 'start', component: StartTransfusionComponent },
    { path: 'update', component: UpdateTransfusionComponent },
    { path: 'end', component: EndTransfusionComponent }
]

export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ]