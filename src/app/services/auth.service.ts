import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public isSignedIn: boolean = false;
    public userInformation;
    constructor() {}
}
