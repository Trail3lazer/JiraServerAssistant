import { Component, DoCheck, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';
import { IIssueType } from './services/issue/issue.service';
import { IProjectInfo, ProjectService } from './services/project/project.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, DoCheck {
    public vm$: Observable<VM>;
    constructor(
        private readonly authService: AuthService,
        private readonly projectService: ProjectService
    ) {}

    public ngOnInit() {
        this.vm$ = combineLatest([
            this.authService.isSignedIn$.pipe(startWith(false)),
            this.projectService.availableProjects$.pipe(startWith([])),
            this.projectService.project$.pipe(startWith(null)),
            this.authService.url$.pipe(startWith('')),
            this.projectService.projectStatuses$.pipe(startWith([])),
        ]).pipe(
            map(([isSignedIn, projects, selectedProject, url, statuses]) => {
                const vm = { isSignedIn, projects, selectedProject, url, statuses } as VM;
                vm.flowState = this.getFlowState(vm);
                return vm;
            })
        );
    }

    public ngDoCheck() {
        console.log('change detection fired');
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
}

export interface VM {
    isSignedIn: boolean;
    projects: IProjectInfo[];
    selectedProject: IProjectInfo;
    url: string;
    flowState: FlowState;
    statuses: IIssueType[];
}
