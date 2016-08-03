import {Component} from "@angular/core";

@Component({
    selector: 'hello-world',
    template: `
        <h1>Hello {{ name }}!</h1>
        <a href="#/start" class="btn btn-default" role="button">Start</a>
    `
})
export class HelloWorldComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2';
    }
}