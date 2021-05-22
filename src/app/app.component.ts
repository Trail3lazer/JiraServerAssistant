import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
    public isSignedIn$: Observable<boolean>;
    constructor(private readonly authService: AuthService) {}
    ngOnInit() {
        this.isSignedIn$ = this.authService.isSignedIn$;
    }
}
