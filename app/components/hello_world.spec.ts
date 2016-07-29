import {
    describe,
    beforeEach,
    expect,
    it
} from '@angular/core/testing';
import {HelloWorldComponent} from "./hello_world";

describe('HelloWorldComponent', () => {

    beforeEach(() => {
        this.helloWorldComponent = new HelloWorldComponent();
    });

    it('has a name property', () => {
        expect(this.helloWorldComponent.name).toBe('Angular 2');
    });
});