import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    private projectUrl = 'https://jira.1800contacts.com/rest/api/2/project';
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
    public getProjects(): Observable<IProjectInfo[]> {
        return this.http.get<IProjectInfo[]>(this.projectUrl + '?recent=5');
    }
}
