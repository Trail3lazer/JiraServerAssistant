import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import flatten from 'lodash-es/flatten';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { tap, switchMapTo, map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ProjectService } from '../project/project.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
    providedIn: 'root',
})
export class StatusService {
    private statusesKey = '3dbefd70-db09-4d89-b815-c8153bc6f32a';
    private selectedStatusesKey = 'cc67988d-57a3-4db8-b6fd-1aab3cffdb56';
    private selectedStatuses$$: BehaviorSubject<string[]> = new BehaviorSubject([]);
    private statusesHidden$$: BehaviorSubject<boolean> = new BehaviorSubject(false);
    public statusesHidden$: Observable<boolean> = this.statusesHidden$$.asObservable();
    constructor(
        private readonly storageService: StorageService,
        private readonly projectService: ProjectService
    ) {}
    public selectedStatuses$: Observable<string[]> = this.getSelectedStatuses().pipe(
        tap((x: string[]) => {
            this.selectedStatuses$$.next(x);
            if (x?.length > 0) {
                this.statusesHidden$$.next(true);
            }
        }),
        switchMapTo(this.selectedStatuses$$)
    );

    public statuses$ = combineLatest([
        this.projectService.issueTypes$,
        this.selectedStatuses$,
    ]).pipe(
        map(([x, selected]) => {
            const statusesDeep = x.map((issueType) => issueType.statuses);
            const statusList = flatten(statusesDeep);
            const statusDict: { [name: string]: IStatus } = {};
            for (let status of statusList) {
                if (!!statusDict[status.name]) continue;
                status.isSelected = selected.includes(status.name);
                statusDict[status.name] = status;
            }
            return Object.values(statusDict);
        })
    );

    public getSelectedStatuses(): Observable<string[]> {
        return this.storageService
            .getStorage$()
            .pipe(map((x) => x[this.selectedStatusesKey] ?? []));
    }

    public setStatuses(statuses: IStatus[]) {
        this.storageService.setStorage$({ [this.statusesKey]: statuses });
    }

    public setSelectedStatuses(names: string[]) {
        this.selectedStatuses$$.next(names);
        return this.storageService.setStorage$({ [this.selectedStatusesKey]: names });
    }

    public toggleStatusShown(): void {
        this.statusesHidden$$.next(!this.statusesHidden$$.value);
    }

    private getUniqueStatuses(issueTypes: IIssueType[]): IStatusesAndTypes {
        const types = {};
        const statuses: { [key: number]: IStatus } = {};
        for (let issueType of issueTypes) {
            if (types[issueType.name]) continue;
            let type = {
                name: issueType.name,
                id: issueType.id,
            };
            types[issueType.name](type);

            for (let status of issueType.statuses) {
                if (statuses[status.name]) continue;
                statuses[status.name] = status;
            }
        }
        return { statuses, types };
    }
}

interface IStatusesAndTypes {
    statuses: {
        [name: string]: IStatus;
    };
    types: {
        [name: string]: IType;
    };
}
interface IType {
    name: string;
    id: string;
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
    isSelected: boolean;
}
