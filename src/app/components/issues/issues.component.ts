import { Component, Input, OnInit } from '@angular/core';
import { VM } from '@app/app.component';

@Component({
    selector: 'app-issues',
    templateUrl: './issues.component.html',
    styleUrls: ['./issues.component.sass'],
})
export class IssuesComponent {
    @Input() vm: VM;
    constructor() {}
}
