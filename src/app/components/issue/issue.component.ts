import { Component, Input, OnInit } from '@angular/core';
import { VM } from '@app/app.component';

@Component({
    selector: 'app-issue',
    templateUrl: './issue.component.html',
    styleUrls: ['./issue.component.sass'],
})
export class IssueComponent {
    @Input() vm: VM;
    constructor() {}
}
