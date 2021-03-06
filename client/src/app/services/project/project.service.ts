import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { catchError, filter, map, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { IIssueType, } from '../status/status.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projectUrl$ = this.auth.url$.pipe(filter(x=> !!x), map((x) => x + 'rest/api/2/project'));
    private projectBS: BehaviorSubject<IProjectInfo> = new BehaviorSubject(null);
    private projectCookieKey = '6cbbfa32-e2f1-4694-861e-1edf3c9a1a2b';
    public project$ = this.projectBS.asObservable();
    public availableProjects$ = this.projectUrl$.pipe(
        switchMap((x) => this.http.get<IProjectInfo[]>(x + '?recent=5')),
        catchError(() => {
            this.auth.deleteUrl();
            console.error("User is either not signed into jira at the specified url or the url is not formatted correctly");
            return [];
        })
    );
    public issueTypes$: Observable<IIssueType[]> = combineLatest([this.project$, this.projectUrl$]).pipe(
        filter(([project, url]) => !!project?.key && !!url),
        switchMap(([project, url]) => this.http.get<IIssueType[]>(`${url}/${project.key}/statuses`)),
        catchError(e => {
            console.error(e);
            return [];
        })
    );

    constructor(
        private readonly http: HttpClient,
        private readonly auth: AuthService,
        private readonly storageService: StorageService
    ) {
        this.storageService
            .getStorage$()
            .pipe(take(1))
            .subscribe((storage) => {
                const x = storage[this.projectCookieKey];
                if (x) {
                    this.projectBS.next(JSON.parse(x));
                }
            });
    }

    public setProject(project: IProjectInfo): Observable<void> {
        this.projectBS.next(project);
        return this.storageService.setStorage$({
            [this.projectCookieKey]: JSON.stringify(project),
        });
    }

    public deleteProject(): Observable<void> {
        this.projectBS.next(null);
        return this.storageService.deleteStorage$([this.projectCookieKey]).pipe(take(1));
    }
}

export interface IProjectInfo {
    url: string;
    id: number;
    key: string;
    name: string;
}
