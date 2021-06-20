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
    public workLogHidden = true;
    public workLogFormHidden = true;
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
    public doTransition(transition: ITransition): void {
        this.issueService.transition(transition, this.issue.id).subscribe();
    }

    public toggleWorkLog(): void {
        this.workLogHidden = !this.workLogHidden
    }

    public toggleWorkLogForm(): void {
        this.workLogFormHidden = !this.workLogFormHidden
    }
}
