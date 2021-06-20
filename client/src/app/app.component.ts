import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';
import { IIssueResponse, IssueService } from './services/issue/issue.service';
import { IProjectInfo, ProjectService } from './services/project/project.service';
import { IStatus, StatusService } from './services/status/status.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
    public vm$: Observable<VM>;
    constructor(
        private readonly authService: AuthService,
        private readonly projectService: ProjectService,
        private readonly statusService: StatusService,
        private readonly issueService: IssueService
    ) {}

    public ngOnInit() {
        this.vm$ = combineLatest([
            this.authService.isSignedIn$.pipe(startWith(false)),
            this.projectService.availableProjects$.pipe(startWith([])),
            this.projectService.project$.pipe(startWith([null])),
            this.authService.url$.pipe(startWith([null])),
            this.statusService.statuses$.pipe(startWith([])),
            this.statusService.statusesHidden$.pipe(startWith(false)),
            this.issueService.issues$.pipe(startWith([])),
        ]).pipe(
            map(
                ([
                    isSignedIn,
                    projects,
                    selectedProject,
                    url,
                    statuses,
                    statusesHidden,
                    issues,
                ]): VM => {
                    const vm = {
                        isSignedIn,
                        projects,
                        selectedProject,
                        url,
                        statuses,
                        statusesHidden,
                        issues,
                    } as VM;
                    vm.flowState = this.getFlowState(vm);
                    return vm;
                }
            )
        );
    }

    private getFlowState(vm: VM): FlowState {
        if (!vm.isSignedIn) {
            return FlowState.Login;
        }
        if (!vm.selectedProject) {
            return FlowState.Project;
        }
        return FlowState.Issues;
    }
}

enum FlowState {
    Login = 'login',
    Project = 'project',
    Issues = 'issues',
    Loading = 'loading',
}

export interface VM {
    isSignedIn: boolean;
    projects: IProjectInfo[];
    selectedProject: IProjectInfo;
    url: string;
    flowState: FlowState;
    statuses: IStatus[];
    statusesHidden: boolean;
    issues: IIssueResponse[];
}
