import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { ILoginResponse } from './ILoginResponse';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private isSignedInBS = new BehaviorSubject(false);
    public isSignedIn$: Observable<boolean> = this.isSignedInBS.asObservable();
    private sessionName: string;
    private sessionValue: string;
    private sessionNameKey = '60d83deb-47d8-4f64-b02e-426d151cc3e6';
    private authUrl = 'https://jira.1800contacts.com/rest/auth/1/session';
    constructor(private readonly httpClient: HttpClient) {
        this.sessionName = window.localStorage.getItem(this.sessionNameKey);
        console.log(this.sessionName);
        if (this.sessionName) {
            this.sessionValue = window.localStorage.getItem(this.sessionName);
            this.isSignedInBS.next(true);
        }
    }

    public signIn(username: string, password: string) {
        let requestHeaders = { headers: { ['content-type']: 'application/json' } };
        this.httpClient
            .post(this.authUrl, { username: username, password: password }, requestHeaders)
            .pipe(take(1))
            .subscribe((response: ILoginResponse) => {
                console.log(response);
                this.sessionName = response.session.name;
                this.sessionValue = response.session.value;
                window.localStorage.setItem(this.sessionNameKey, this.sessionName);
                window.localStorage.setItem(this.sessionName, this.sessionValue);
                this.isSignedInBS.next(true);
            });
    }

    public signOut() {
        const header = this.getCookieHeader();
        this.httpClient
            .delete(this.authUrl)
            .pipe(take(1))
            .subscribe((response) => {
                console.log(response);
                window.localStorage.removeItem(this.sessionName);
                window.localStorage.removeItem(this.sessionNameKey);
                this.sessionValue = undefined;
                this.sessionName = undefined;
                this.isSignedInBS.next(false);
            });
    }

    public getCookieHeader(): string {
        if (this.isSignedInBS.value) {
            return `${this.sessionName}=${this.sessionValue}`;
        }
    }
}
