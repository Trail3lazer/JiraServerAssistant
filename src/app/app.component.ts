import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})
export class AppComponent {
    public isSignedIn = this.authService.isSignedIn;
    public userInfo;
    constructor(private readonly authService: AuthService) {}
}
