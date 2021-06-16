import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectSelectionComponent } from './components/project-selection/project-selection.component';
import { HttpRequestInterceptor } from './HttpAuthInterceptor';
import { StatusesComponent } from './components/statuses/statuses.component';
import { PendingComponent } from './components/pending/pending.component';
import { IssueComponent } from './components/issue/issue.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        ProjectSelectionComponent,
        StatusesComponent,
        PendingComponent,
        IssueComponent,
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }],
    bootstrap: [AppComponent],
})
export class AppModule {}
