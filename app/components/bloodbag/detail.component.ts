import {Component, OnInit, OnDestroy} from "@angular/core";
import {BloodbagService, Bloodbag} from "../../services/bloodbag/bloodbag.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
    selector: 'bloodbag-detail',
    providers: [BloodbagService],
    templateUrl: 'app/components/bloodbag/detail.component.html'
})

export class BloodbagDetailComponent implements OnInit, OnDestroy {

    private bloodbagServiceSubscription: Subscription;

    private barcode: string;
    private bloodBag: Bloodbag;

    constructor(private service: BloodbagService,  private route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.barcode = params['barcode'];
        });
    }

    ngOnInit(){
        let returnValue: Observable<Bloodbag> = this.service.getByBarcode(this.barcode);
        this.bloodbagServiceSubscription =
            returnValue.subscribe(
                (result: Bloodbag) => this.bloodBag = result
            );
    }

    ngOnDestroy(){
        this.bloodbagServiceSubscription.unsubscribe();
    }
}