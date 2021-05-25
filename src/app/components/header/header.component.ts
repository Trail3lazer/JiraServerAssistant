import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
    @Input() vm;
    constructor(private readonly authService: AuthService) {}
    public signOut() {
        this.authService.signOut();
    }
}
