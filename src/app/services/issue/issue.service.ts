import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ProjectService } from '../project/project.service';
import { StatusService } from '../status/status.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
    providedIn: 'root',
})
export class IssueService {
    private refreshIssues$ = new BehaviorSubject(null);
    private defaultFields = [Fields.Priority, Fields.Assignee, Fields.Summary];
    constructor(
        private readonly projectService: ProjectService,
        private readonly authService: AuthService,
        private readonly http: HttpClient,
        private readonly storageService: StorageService,
        private readonly statusService: StatusService
    ) {}

    private fieldsKey = '170227b0-01d8-4633-94d2-cb991d021393';
    private url$: Observable<string> = this.authService.url$.pipe(
        map((x) => x + 'rest/api/2/search')
    );
    private issueUrl$: Observable<string> = this.authService.url$.pipe(
        map((x) => x + 'rest/api/2/issue/')
    );

    public fields$: Observable<string[]> = this.getFields();

    public issues$: Observable<IIssueResponse[]> = combineLatest([
        this.statusService.selectedStatuses$,
        this.projectService.project$,
        this.fields$,
        this.url$,
        this.refreshIssues$,
    ]).pipe(
        switchMap(([statuses, project, fields, url]) => {
            const issues: Observable<IIssueResponse>[] = [];
            for (let status of statuses) {
                const res = this.http
                    .post<IIssueResponse>(url, {
                        startAt: 0,
                        maxResults: 20,
                        fields: fields,
                        jql: `project = "${project.name}" AND status = "${status}" order by lastViewed DESC`,
                    } as ISearchRequest)
                    .pipe(map((res: IIssueResponse) => ({ ...res, status: status })));
                issues.push(res);
            }
            return forkJoin(issues);
        })
    );

    public getFields(): Observable<string[]> {
        return this.storageService.getStorage$().pipe(
            map((x) => {
                return x[this.fieldsKey] ?? this.defaultFields;
            })
        );
    }

    public getTransitions(issue: IIssue): Observable<ITransition[]> {
        return this.issueUrl$.pipe(
            switchMap((url: string) => this.http.get(url + issue.id + '/transitions')),
            map((x: { transitions: ITransition[] }) => x.transitions)
        );
    }

    public transition(transition: ITransition, issueId: string): Observable<void> {
        var request: ITransitionRequest = {
            transition: {
                id: transition.id,
            },
            fields:
                transition.to.name === 'Closed' || transition.to.name === 'Done'
                    ? {
                          resolution: { name: transition.to.statusCategory.name },
                      }
                    : null,
        };
        return this.issueUrl$.pipe(
            switchMap((url: string) =>
                this.http.post<void>(url + issueId + '/transitions', request)
            ),
            take(1),
            tap(() => this.refreshIssues$.next(null))
        );
    }
}

interface ITransitionRequest {
    transition: {
        id: string;
    };
    fields: {
        resolution: {
            name: string;
        };
    };
}

interface ISearchRequest {
    jql: string;
    startAt: number;
    maxResults: number;
    fields: string[];
}

export interface IIssueResponse {
    expand: string;
    startAt: string;
    maxResults: string;
    total: number;
    issues: IIssue[];
    status: string;
}

export interface ITransition {
    id: string;
    name: string;
    to: {
        statusColor: string;
        description: string;
        iconUrl: string;
        name: string;
        id: string;
        statusCategory: {
            id: string;
            key: string;
            colorName: string;
            name: string;
        };
    };
}

export interface IIssue {
    expand: string;
    id: string;
    self: string;
    key: string;
    fields: {
        [key: string]: any;
    };
    renderedFields: {
        [key: string]: {};
    };
    transitions: ITransition[];
}
export enum Fields {
    Assignee = 'assignee',
    Type = 'type',
    Epic = 'EpicLink',
    Labels = 'labels',
    Components = 'components',
    Priority = 'priority',
    TShirtSize = 't-Shirt size',
    Comments = 'comments',
    DaysInProgress = 'days in progress',
    AppDevStartTime = 'appdevstarttime',
    AppQAStartTime = 'appqastarttime',
    CapitalizationProjectName = 'capitalization project name',
    CapitalizationDetermination = 'capitalization determination',
    EpicName = 'epic name',
    ExpectedImpact = 'expected impact',
    LeadTimeStart = 'lead time - start',
    LeadTimeEnd = 'lead time - end',
    PairAsssignee = 'pair asssignee',
    PairAssignee = 'pair assignee',
    QaAssignee = 'qa assignee',
    Sprint = 'sprint',
    StarWarsSize = 'starwars size',
    StoryPoints = 'story points',
    SwarmEconomyWorkSource = 'swarm economy work source',
    SwarmEconomyWorkType = 'swarm economy work type',
    TimeSpent = 'time spent',
    WebsiteReleaseType = 'website release type',
    WorkObjectives = 'work objectives',
    Summary = 'summary',
}
