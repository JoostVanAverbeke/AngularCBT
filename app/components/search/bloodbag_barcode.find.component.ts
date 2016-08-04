import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'find-bloodbag',
    templateUrl: 'app/components/search/bloodbag_barcode.find.component.html'
})

export class FindBloodbagBarcodeComponent {
    private barcode: string;

    errorMsg: string;

    constructor(private router: Router) {
    }

    // When the next call is done, reroute the response to the bloodbag.detail.component
    getBloodbagByBarcode(barcode: string) {
        this.router.navigate(['/bloodbag/' + barcode + '/detail']);
    }
}