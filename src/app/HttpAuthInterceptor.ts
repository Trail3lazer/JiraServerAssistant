import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

/** Inject With Credentials into the request */
@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    private isSignedIn = false;
    constructor(private readonly authService: AuthService) {
        this.authService.isSignedIn$.subscribe((isSignedIn) => (this.isSignedIn = isSignedIn));
    }
    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.isSignedIn) {
            const req2 = req.clone({
                withCredentials: true,
                setHeaders: {
                    'Set-Cookie': req.headers.get('Cookie') + this.authService.getCookieHeader(),
                },
            });

            return next.handle(req2);
        }
        return next.handle(req);
    }
}
