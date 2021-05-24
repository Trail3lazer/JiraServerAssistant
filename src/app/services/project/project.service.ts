import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

export interface IProjectInfo {
    url: string;
    id: number;
    key: string;
    name: string;
}

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private projectUrl$ = this.auth.url$.pipe(map((x) => x + 'rest/api/2/project'));
    private projectBS: BehaviorSubject<IProjectInfo> = new BehaviorSubject(null);
    private projectCookieKey = '6cbbfa32-e2f1-4694-861e-1edf3c9a1a2b';
    private projectInfo: IProjectInfo;
    public project$ = this.projectBS.asObservable();
    constructor(private readonly http: HttpClient, private readonly auth: AuthService) {
        const jsonProject = window.localStorage.getItem(this.projectCookieKey);
        if (jsonProject) {
            this.projectInfo = JSON.parse(jsonProject);
            this.projectBS.next(this.projectInfo);
        }
    }

    public getProjects() {
        return this.projectUrl$.pipe(
            take(1),
            switchMap((x) => this.http.get<IProjectInfo[]>(x + '?recent=5'))
        );
    }

    public setProject(project: IProjectInfo): void {
        this.projectBS.next(project);
        window.localStorage.setItem(this.projectCookieKey, JSON.stringify(project));
    }

    public deleteProject(): void {
        this.projectBS.next(null);
        window.localStorage.removeItem(this.projectCookieKey);
    }
}
