import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
    @Input() usernameInput;
    public username;
    ngOnInit(): void {
        this.username = this.usernameInput ?? 'Log in to use the app';
    }
}
