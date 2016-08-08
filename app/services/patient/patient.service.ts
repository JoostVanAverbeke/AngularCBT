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
    encounterStartTime: string;
    wardName: string;
    room: string;
    stayStartTime: string;
    attributeList: string;
    determinationDate1: string;
    determinationDate2: string;
    lastScreeningPositive: boolean;
    lastScreeningTime: string;
    positiveScreening: boolean;
    positiveScreeningTime: string;
    transfusionAdvice: string;
    transfusionReaction: string;
    bloodGroup: string;
    rhesus: string;
    antigenList: string;
    antibodyList: string;
    bloodTypingFinal: string;
    crossBloodValid: boolean;
    objectAttributeList: string;
    pmrExtraInfo: string;
}



@Injectable()
export class PatientService {

    constructor(private http: Http, private router: Router) {
    }

    private myPatient :Patient = {
        id: 1,
        firstName: "Laurens",
        lastName: "Vandenberghe",
        birthDate: "13/07/1977",
        externalization: "Laurens Vandenberghe, M, 13/07/1977",
        gender: "M",
        encounterStartTime: "08/05/2016",
        wardName: "Spoed",
        room: "123",
        stayStartTime: "dummy_string",
        attributeList: "dummy_string",
        determinationDate1: "dummy_string",
        determinationDate2: "dummy_string",
        lastScreeningPositive: true,
        lastScreeningTime: "dummy_string",
        positiveScreening: true,
        positiveScreeningTime: "dummy_string",
        transfusionAdvice: "dummy_string",
        transfusionReaction: "dummy_string",
        bloodGroup: "dummy_string",
        rhesus: "dummy_string",
        antigenList: "dummy_string",
        antibodyList: "dummy_string",
        bloodTypingFinal: "dummy_string",
        crossBloodValid: true,
        objectAttributeList: "dummy_string",
        pmrExtraInfo: "dummy_string"
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
            // .map((response: Response) =>
            //     response.json().response.data.set.bloodbags[0]);
            .map((response: Response) => this.myPatient);

    }

    public getById(id: string): Observable<Patient>  {
        let headers = new Headers();
        headers.append('Authorization', JSON.parse(localStorage.getItem("user")).credentials);
        headers.append('ApiVersion', '1');
        headers.append('Content-Type', 'application/json');

        return this.http
            .get(
                "http://192.168.1.78:8080/glims/rest/BtmService/persons/" + id,
                {headers: headers})
            // .map((response: Response) =>
            //     response.json().response.data.set.patients[0]);
            .map((response: Response) => this.myPatient);
    }

}