import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;
    constructor(private readonly authService: AuthService) {}

    public get urlControl() {
        return this.loginForm.get('url');
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            url: new FormControl('', { validators: [Validators.required] }),
        });
    }

    public onSubmit(): void {
        const url = `https://${this.urlControl.value}/`;
        this.authService.getJiraCredentials(url).pipe(take(1)).subscribe();
    }
}
