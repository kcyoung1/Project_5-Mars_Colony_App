import {Component, Input} from '@angular/core';
import {NgSwitch, NgSwitchWhen} from '@angular/common';

@Component({
    selector: 'loading-container',
    template: `
    <div [ngSwitch]="loading">
        <div *ngSwitchWhen="false">
            <ng-content></ng-content>
        </div>
        <div *ngSwitchWhen="true">
            <img src="../images/loading.svg" alt="Loading..."/>
        </div>
    </div>`,
    directives: [NgSwitch, NgSwitchWhen]
})
export class LoadingContainer {
    @Input() loading: boolean;
    constructor() {}
}

export class LoadingPage {
    public loading: boolean;
    constructor(val: boolean) {
        this.loading = val;
    }
    standby() {
        this.loading = true;
    }
    ready() {
        this.loading = false;
    }
}
