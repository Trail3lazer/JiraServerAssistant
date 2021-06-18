import { Component, Input } from '@angular/core';
import { VM } from '@app/app.component';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.sass'],
})
export class StatusComponent {
    @Input() vm: VM;
    constructor() {}
}
