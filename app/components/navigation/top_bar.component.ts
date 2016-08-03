import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'top_nav_bar',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/navigation/top_bar.component.html'
})

export class TopNavigationBarComponent {}