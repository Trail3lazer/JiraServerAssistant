import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IIssue, IssueService, IWorkLog } from "@app/services/issue/issue.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-worklog',
  templateUrl: './worklog.component.html',
  styleUrls: ['./worklog.component.sass']
})
export class WorklogComponent implements OnInit {
  public workLogs$: Observable<IWorkLog[]>
  @Input() issue: IIssue;
  @Output() close: EventEmitter<void> = new EventEmitter()
  constructor(private readonly issueService: IssueService) { }

  ngOnInit(): void {
    this.workLogs$ = this.issueService.getWorkLog(this.issue.id);
  }
}
