import {Component} from "@angular/core";
import {AuthenticationService} from "../../services/authentication/authentication.service";

export class Login {
    constructor(username: string, password:string){}
}

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl: 'app/components/login/login.component.html'
})
export class LoginComponent {

    private username: string;
    private password: string;

    public errorMsg = '';

    constructor(private service: AuthenticationService) {
    }

    login() {
        if (!this.service.login(this.username, this.password)) {
            this.errorMsg = 'Failed to login';
        }
    }
}