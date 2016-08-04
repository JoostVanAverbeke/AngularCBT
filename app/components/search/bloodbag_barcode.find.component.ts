import { Component } from '@angular/core';
import {BloodbagService} from "../../services/bloodbag/bloodbag.service";

@Component({
    selector: 'find-bloodbag',
    templateUrl: 'app/components/search/bloodbag_barcode.find.component.html',
    providers: [BloodbagService]
})

export class FindBloodbagBarcodeComponent {
    private barcode: string;

    errorMsg: string;

    constructor(private service: BloodbagService) {
    }

    // When the next call is done, reroute the response to the bloodbag.detail.component
    getBloodbagByBarcode(barcode: string) {

        if (!this.service.getByBarcode(barcode)) {
            this.errorMsg = 'No bloodbag found with this barcode';
        }
    }
}