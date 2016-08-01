import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
    selector: 'top_nav_bar',
    templateUrl: 'app/components/navigation/top_bar.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class TopNavigationBarComponent {}

