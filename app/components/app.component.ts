import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

import {TopNavigationBarComponent} from "./navigation/top_bar.component";

@Component({
    selector: 'cybertrack-app',
    directives: [ROUTER_DIRECTIVES, TopNavigationBarComponent],
    template: ` 
        <top_nav_bar></top_nav_bar>
        <router-outlet></router-outlet>
    `
})

export class CyberTrackComponent {}