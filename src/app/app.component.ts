import { Component, DoCheck, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMapTo, tap } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, DoCheck {
    public vm$: Observable<boolean>;
    private isSignedIn$: Observable<boolean> = this.authService.isSignedIn$;
    constructor(private readonly authService: AuthService) {}

    public ngOnInit() {
        this.vm$ = this.authService.signInOnStart().pipe(
            tap((x) => console.log('signInOnStart: ', x)),
            switchMapTo(this.isSignedIn$),
            tap((x) => console.log('isSignedIn: ', x))
        );
    }

    public ngDoCheck() {
        console.log('change detection fired');
    }
}
