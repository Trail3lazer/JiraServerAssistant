import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, bindCallback, from, Observable, of } from 'rxjs';
import {
    filter,
    map,
    shareReplay,
    startWith,
    switchMap,
    switchMapTo,
    take,
    tap,
} from 'rxjs/operators';
import { ICookie, StorageService } from '../storage/storage.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private url$$ = new BehaviorSubject<string>(null);
    private sessionValue$$ = new BehaviorSubject<string>(null);
    public isSignedIn$: Observable<boolean> = this.signInOnStart().pipe(
        switchMapTo(this.sessionValue$$),
        map((x) => !!x)
    );
    public url$: Observable<string> = this.url$$.pipe(filter((x) => !!x));
    private urlKey = '0b49dde5-f271-49ae-9bc3-f6454210d1e5';
    private authUrl$ = this.url$$.pipe(
        filter((x) => !!x),
        map((x) => x + 'rest/auth/1/session')
    );
    constructor(
        private readonly httpClient: HttpClient,
        private readonly storageService: StorageService
    ) {}

    public checkAuthStatus(): Observable<boolean> {
        return this.authUrl$.pipe(
            switchMap((x) => {
                if (!x) return of(null);
                return this.httpClient.get(x);
            }),
            map((x) => !!x['session'])
        );
    }

    public getJiraCredentials(url: string): Observable<void> {
        if (!url) {
            return of(null);
        }
        return this.storageService
            .getCookie$({
                name: 'JSESSIONID',
                url: url,
            })
            .pipe(
                take(1),
                tap((x: ICookie) => {
                    if (x) {
                        this.url$$.next(url);
                        this.sessionValue$$.next(x.value);
                    }
                }),
                switchMap(() => this.storageService.setStorage$({ [this.urlKey]: url }))
            );
    }

    public signOut(): Observable<any> {
        return this.authUrl$.pipe(
            switchMap((x) => this.httpClient.delete(x)),
            take(1),
            tap(() => {
                this.sessionValue$$.next(null);
            })
        );
    }

    public getCookieHeader(): Observable<string> {
        return this.sessionValue$$.pipe(
            filter((x) => !!x),
            map((x) => `JSESSIONID=${x}`)
        );
    }

    private signInOnStart(): Observable<ICookie> {
        return this.storageService.getStorage$().pipe(
            switchMap((x) => {
                const url = x[this.urlKey];
                if (!url) return of(null);
                return this.getJiraCredentials(url);
            })
        );
    }
}
