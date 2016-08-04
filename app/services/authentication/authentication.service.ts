import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

import {Base64} from "./../../util/Base64";

export class User {
    loginName: string;
    firstName: string;
    lastName: string;
    initials: string;
    hcProviderId: number;
    hospitalEmployeeId: number;
    credentials: string;
}

@Injectable()
export class AuthenticationService {

    constructor(private http: Http, private router: Router) {
    }

    public login(username: string, password: string): boolean {
        var userSet: boolean;
        let credentials: string = 'Basic ' + Base64.encode(username + '@CyberTrack:' + password);
        this.getUser(username, credentials)
            .subscribe(
                data => userSet = this.setCredentials(this.parseData(data, credentials)));
        return userSet;
    }

    private getUser(username: string, credentials: string): Observable<User> {
        let headers = new Headers();
        headers.append('Authorization', credentials);
        headers.append('ApiVersion', '1');
        headers.append('Content-Type', 'application/json');

        return this.http
            .get(
                "http://192.168.1.78:8080/glims/rest/BtmService/users?value=" + username + "&type=loginName",
                {headers: headers})
            .map((response: Response) => response.json());
    }

    private parseData(data: any, credentials: string): User {
        let user: User = data.response.data.set.users[0];
        return {
            loginName: user.loginName,
            firstName: user.firstName,
            lastName: user.lastName,
            initials: user.initials,
            hcProviderId: user.hcProviderId,
            hospitalEmployeeId: user.hospitalEmployeeId,
            credentials: credentials
        };
    }

    private setCredentials(authUser: User): boolean {
        if (authUser.lastName != null) {
            localStorage.setItem("user", JSON.stringify(authUser));
            this.router.navigate(['']);
            return true;
        }
        return false;
    }

    public logout(): void {
        localStorage.removeItem("user");
        this.router.navigate(['login']);
    }

    public checkCredentials(): boolean {
        if (localStorage.getItem("user") === null) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}