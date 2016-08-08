import {BloodbagService} from "../../services/bloodbag/bloodbag.service";
import {BloodbagDetailComponent} from "./detail.component";
import {ActivatedRoute, ROUTER_DIRECTIVES} from "@angular/router";
import {Component, AfterViewInit, ViewChild} from "@angular/core";
import {PatientDetailComponent} from "../patient/detail.component";
import {Router} from "@angular/router";
import {PatientService, Patient} from "../../services/patient/patient.service";
import {Observable, Subscription} from "rxjs";

@Component({
    selector: 'bloodbag-overview',
    templateUrl: 'app/components/bloodbag/overview.component.html',
    directives: [ROUTER_DIRECTIVES, BloodbagDetailComponent, PatientDetailComponent],
    providers: [ PatientService ]
})

export class BloodbagOverviewComponent {

    private bloodbagBarcode: string;
    private patientId: string;
    private patient: Patient;
    private patientServiceSubscription: Subscription;

    constructor(private router: Router, private route: ActivatedRoute, private service: PatientService) {
        route.params.subscribe(params => {
            this.bloodbagBarcode = params['barcode'];
        });
    }

    /* When the patientId was retrieved in the bloodbag detail component, we receive a notification and we fetch the
     patient data */

    onNotify(message: string): void {
        this.patientId = message;

        /* Get the data and inject it into the patient details view */
        let returnValue: Observable<Patient> = this.service.getById(this.patientId);

        this.patientServiceSubscription =
            returnValue.subscribe(
                (result: Patient) => {
                    this.patient = result;
                }
            );
    }
}