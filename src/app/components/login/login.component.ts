import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    constructor(private readonly authService: AuthService) {}

    public get usernameControl() {
        return this.loginForm.get('username');
    }
    public get passwordControl() {
        return this.loginForm.get('password');
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl('', { validators: [Validators.required] }),
            password: new FormControl('', { validators: [Validators.required] }),
        });
    }

    public onSubmit() {
        const username = this.usernameControl.value;
        const password = this.passwordControl.value;
        this.authService.signIn(username, password);
    }
}
