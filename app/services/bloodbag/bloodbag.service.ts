import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";

import {Base64} from "./../../util/Base64";

@Injectable()
export class BloodbagService {

    constructor(private http: Http, private router: Router) {
    }

    getByBarcode(barcode: string) {

        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + Base64.encode(localStorage.getItem("user").loginName + '@CyberTrack:' + localStorage.getItem("user").password));
        headers.append('ApiVersion', '1');
        headers.append('Content-Type', 'application/json');

        return this.http
            .get(
                "http://192.168.1.78:8080/glims/rest/BtmService/bloodbags/?barcode=" + barcode,
                {headers: headers})
            .map((response: Response) => response.json());

    }
}