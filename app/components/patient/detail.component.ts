import {Component, Input, OnChanges} from '@angular/core';
import {Subscription, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {PatientService, Patient} from "../../services/patient/patient.service";

@Component({
    selector: 'patient-detail',
    templateUrl: 'app/components/patient/detail.component.html',
    providers: [PatientService]
})

export class PatientDetailComponent {

    @Input() patient: Patient;

    private patientServiceSubscription: Subscription;

    private id: string;

    constructor(private service: PatientService,  private route: ActivatedRoute) {

        /* Input if the details route is called directly */
        route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

}