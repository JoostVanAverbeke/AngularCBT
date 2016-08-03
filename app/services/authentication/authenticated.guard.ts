import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService) {}

    canActivate() {
        return this.authenticationService.checkCredentials();
    }
}