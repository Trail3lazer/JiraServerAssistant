import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { IIssue, IssueService, ITransition } from '@app/services/issue/issue.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-issue',
    templateUrl: './issue.component.html',
    styleUrls: ['./issue.component.sass'],
})
export class IssueComponent implements OnInit {
    @Input() issue: IIssue;
    @ViewChild('issueRef') issueRef;
    public dropdownHidden = true;
    public transitions$: Observable<ITransition[]>;
    constructor(private readonly issueService: IssueService) {}
    public ngOnInit() {
        this.transitions$ = this.issueService.getTransitions(this.issue);
    }

    @HostListener('document:click', ['$event'])
    public hideDropdown(event: any) {
        if (this.dropdownHidden && this.issueRef.nativeElement.contains(event.target)) {
            this.dropdownHidden = !this.dropdownHidden;
        } else {
            this.dropdownHidden = true;
        }
    }
}
