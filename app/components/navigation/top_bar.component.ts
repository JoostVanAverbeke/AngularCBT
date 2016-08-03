import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {AuthenticationService} from "../../services/authentication/authentication.service";

@Component({
    selector: 'top_nav_bar',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/navigation/top_bar.component.html'
})

export class TopNavigationBarComponent {
    private visible: boolean;

    constructor(private authenticationService: AuthenticationService) {
        this.visible = true;
    }

    logout(): void {
        this.authenticationService.logout();
    }
}