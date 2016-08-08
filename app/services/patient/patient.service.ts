import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Router} from "@angular/router";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    externalization: string;
    gender: string;
    encounerSTartTime: string;
    wardName: string;
    room: string;
    stayStartTime: string;

}

@Injectable()
export class PatientService {

    constructor(private http: Http, private router: Router) {
    }

    public getByBarcode(barcode: string): Observable<Patient>  {
        let headers = new Headers();
        headers.append('Authorization', JSON.parse(localStorage.getItem("user")).credentials);
        headers.append('ApiVersion', '1');
        headers.append('Content-Type', 'application/json');

        return this.http
            .get(
                "http://192.168.1.78:8080/glims/rest/BtmService/persons?barcode=" + barcode + '&identifierType=ConfiguredIdentifier',
                {headers: headers})
            .map((response: Response) =>
                response.json().response.data.set.bloodbags[0]);
    }




}