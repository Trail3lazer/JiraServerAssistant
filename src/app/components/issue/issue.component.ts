import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { IIssue } from '@app/services/issue/issue.service';

@Component({
    selector: 'app-issue',
    templateUrl: './issue.component.html',
    styleUrls: ['./issue.component.sass'],
})
export class IssueComponent {
    @Input() issue: IIssue;
    @ViewChild('issueRef') issueRef;
    public dropdownHidden = true;
    constructor(private ref: ElementRef) {}

    @HostListener('document:click', ['$event'])
    public hideDropdown(event: any) {
        if (this.dropdownHidden && this.issueRef.nativeElement.contains(event.target)) {
            this.dropdownHidden = !this.dropdownHidden;
        } else {
            this.dropdownHidden = true;
        }
    }
}
