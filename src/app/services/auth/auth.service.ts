import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, bindCallback, Observable, of } from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    shareReplay,
    switchMap,
    switchMapTo,
    take,
    tap,
} from 'rxjs/operators';

// @ts-ignore
const browser = chrome;

export interface ICookie {
    name: string;
    value: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private url$$ = new BehaviorSubject<string>(null);
    private sessionValue$$ = new BehaviorSubject<string>(null);
    public isSignedIn$: Observable<boolean> = this.sessionValue$$.pipe(map((x) => !!x));
    public url$: Observable<string> = this.url$$.pipe(shareReplay(1));
    private urlKey = '0b49dde5-f271-49ae-9bc3-f6454210d1e5';
    private authUrl$ = this.url$$.pipe(
        filter((x) => !!x),
        map((x) => x + 'rest/auth/1/session')
    );
    constructor(private readonly httpClient: HttpClient) {}

    public signInOnStart(): Observable<ICookie> {
        const url = window.localStorage.getItem(this.urlKey);
        if (!url) {
            return of(null);
        }
        return this.getJiraCredentials(url);
    }

    public checkAuthStatus(): Observable<boolean> {
        return this.authUrl$.pipe(
            switchMap((x) => {
                if (!x) return of(null);
                return this.httpClient.get(x);
            }),
            map((x) => !!x['session'])
        );
    }

    public getJiraCredentials(url: string): Observable<ICookie> {
        if (!url) {
            return of(null);
        }
        return this.getAuthCookieFromChrome(url).pipe(
            take(1),
            tap((x: ICookie) => {
                if (x) {
                    this.url$$.next(url);
                    window.localStorage.setItem(this.urlKey, url);
                    this.sessionValue$$.next(x.value);
                }
            })
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
    private getAuthCookieFromChrome(url: string): Observable<ICookie> {
        if (!url) {
            return of(null);
        }
        const getCookie: (details: any) => Observable<any> = bindCallback(browser.cookies.get);
        return getCookie({ name: 'JSESSIONID', url: url }) as Observable<ICookie>;
    }
}
