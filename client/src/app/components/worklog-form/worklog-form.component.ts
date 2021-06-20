import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IIssue, IssueService } from "@app/services/issue/issue.service";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-worklog-form',
  templateUrl: './worklog-form.component.html',
  styleUrls: ['./worklog-form.component.sass']
})
export class WorklogFormComponent implements OnInit {
  @Input() issue: IIssue;
  @Output() close = new EventEmitter();
  constructor(public readonly issueService: IssueService) { }
  public workLogForm: FormGroup;
  public get timeSpentControl() {
      return this.workLogForm.get('timeSpent');
  }
  public get commentControl() {
      return this.workLogForm.get('comment');
  }

  ngOnInit(): void {
      this.workLogForm = new FormGroup({
          timeSpent: new FormControl('', { validators: [Validators.required] }),
          comment: new FormControl(''),
      });
  }

  public submit() {
    if(this.workLogForm.valid){
      this.issueService.addWorkLog(this.issue.id, this.timeSpentControl.value, this.commentControl.value).pipe(take(1)).subscribe()
      this.close.emit();
    }
  }
}
