import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Router} from "@angular/router";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

export interface Bloodbag {
    id: number;
    externalId: string;
    antigenList: string;
    requiresAuthorization: boolean;
    recipientId: number;
    targetId: number;
    transfusionResponsible1ExtraInfo: string;
    transfusionResponsible2ExtraInfo: string;
    division: string;
    bloodproduct: string;
    bloodproductSpecification: string;
    transfusionAdvice: string;
    location: string;
    webStatus: string;
    bloodGroup: string;
    rhesus: string;
    checkOutWardMnemonic: string;
    transfusionHcProviderFullName: string;
    transfusionResponsible1FullName: string;
    transfusionResponsible2FullName: string;
    expirationDateTime: string;
    transfusionStartDateTime: string;
    transfusionEndDateTime: string;
    utmostTransfusionDateTime: string;
    checkoutDateTime: string;
    radiated: boolean;
    hasRemarks: boolean;
    minutesSinceStartTransfusion: number;
}

@Injectable()
export class BloodbagService {

    constructor(private http: Http, private router: Router) {
    }

    public getByBarcode(barcode: string): Observable<Bloodbag>  {
        let headers = new Headers();
        headers.append('Authorization', JSON.parse(localStorage.getItem("user")).credentials);
        headers.append('ApiVersion', '1');
        headers.append('Content-Type', 'application/json');

        return this.http
            .get(
                "http://192.168.1.78:8080/glims/rest/BtmService/bloodbags?barcode=" + barcode,
                {headers: headers})
            .map((response: Response) =>
                response.json().response.data.set.bloodbags[0]);
    }




}