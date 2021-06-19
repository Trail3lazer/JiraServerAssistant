import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

// @ts-ignore
const browser = chrome;

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    public getStorage$(): Observable<{}> {
        return from(
            new Promise((resolve) => browser.storage.local.get((storage) => resolve(storage)))
        );
    }

    public getCookie$(details): Observable<ICookie> {
        return from(
            new Promise<ICookie>((resolve) =>
                browser.cookies.get(details, (cookie) => resolve(cookie))
            )
        );
    }

    public setStorage$(items: {}): Observable<void> {
        return from(
            new Promise<void>((resolve) => browser.storage.local.set(items, () => resolve()))
        );
    }

    public deleteStorage$(keys: string[]): Observable<void> {
        return from(
            new Promise<void>((resolve) => browser.storage.local.remove(keys, () => resolve()))
        );
    }
}

export interface ICookie {
    name: string;
    value: string;
}
