import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'
import { TopNavigationBarComponent } from './navigation/top_bar.component';

@Component({
    selector: 'cybertrack-app',
    template: ` 
        <top_nav_bar></top_nav_bar>
        <main role="main">
          <router-outlet></router-outlet>
        <main>
    `,
    directives: [ROUTER_DIRECTIVES, TopNavigationBarComponent]
})

export class CyberTrackComponent {

}