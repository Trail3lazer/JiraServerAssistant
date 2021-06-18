import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { Observable, forkJoin } from 'rxjs';
import { debounceTime, filter, map, mapTo, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { IProjectInfo, ProjectService } from '../project/project.service';
import { IIssueType, IStatus, StatusService } from '../status/status.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
    providedIn: 'root',
})
export class IssueService {
    private defaultFields = [Fields.Priority, Fields.Assignee, Fields.Summary];
    constructor(
        private readonly projectService: ProjectService,
        private readonly authService: AuthService,
        private readonly http: HttpClient,
        private readonly storageService: StorageService,
        private readonly statusService: StatusService
    ) {}

    private fieldsKey = '170227b0-01d8-4633-94d2-cb991d021393';
    private url$ = this.authService.url$.pipe(map((x) => x + 'rest/api/2/search'));
    private issueUrl$ = this.authService.url$.pipe(map((x) => x + 'rest/api/2/issue/'));

    private fields$$: BehaviorSubject<string[]> = new BehaviorSubject([]);
    private savedFields$ = this.fields$$.pipe(
        debounceTime(200),
        switchMap((x: string[]) => this.saveFields(x))
    );
    public fields$: Observable<string[]> = this.getFields(); //.pipe(
    //switchMap((x: string[]) => this.addFields(x)),
    //switchMapTo(this.savedFields$)
    // );

    public issues$: Observable<IIssueResponse[]> = combineLatest([
        this.statusService.selectedStatuses$,
        this.projectService.project$,
        this.fields$,
        this.url$,
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

    public removeFields(fieldNames: string[]): Observable<string[]> {
        return this.fields$.pipe(
            take(1),
            map((old: string[]) => {
                const newFields = old.filter((oldField: string) => !fieldNames.includes(oldField));
                this.fields$$.next(newFields);
                return newFields;
            })
        );
    }

    public addFields(fieldNames: string[]): Observable<string[]> {
        return this.fields$.pipe(
            take(1),
            tap((x: string[]) => this.fields$$.next(fieldNames.concat(x)))
        );
    }

    private saveFields(fieldNames: string[]): Observable<string[]> {
        const validated = fieldNames.filter((x) => !!x);
        return this.storageService
            .setStorage$({ [this.fieldsKey]: validated })
            .pipe(mapTo(validated));
    }

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
}

interface ITransitionRequest {
    transition: {
        id: number;
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
