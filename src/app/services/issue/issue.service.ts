import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ProjectService } from '../project/project.service';

@Injectable({
    providedIn: 'root',
})
export class IssueService {
    constructor(
        private readonly projectService: ProjectService,
        private readonly authService: AuthService,
        private readonly http: HttpClient
    ) {}
    private url$ = this.authService.url$.pipe(
        filter((x) => !!x),
        map((x) => x + 'rest/api/2/search')
    );
    public issues = combineLatest([this.projectService.projectStatuses$, this.url$]).pipe(
        map(([issueTypes, url]) => {
            const types = {};
            const statuses: { [key: number]: IStatus } = {};
            for (let issueType of issueTypes) {
                if (types[issueType.id]) continue;
                let type = {
                    name: issueType.name,
                    id: issueType.id,
                };
                types[issueType.id](type);

                for (let status of issueType.statuses) {
                    if (statuses[status.id]) continue;
                    statuses[status.id] = status;
                }
            }
            return statuses;
        })
    );
}

export interface IIssueType {
    id: number;
    name: string;
    subtask: boolean;
    statuses: IStatus[];
}
export interface IStatus {
    description: string;
    iconUrl: string;
    name: string;
    id: number;
}
