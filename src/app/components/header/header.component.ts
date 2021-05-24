import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
    public isSignedIn$ = this.authService.isSignedIn$;
    constructor(private readonly authService: AuthService) {}
    ngOnInit(): void {}

    public signOut() {
        this.authService.signOut();
    }

    public click(): void {}
}
