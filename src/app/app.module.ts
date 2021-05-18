import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
    declarations: [AppComponent, HeaderComponent, LoginComponent, MainComponent],
    imports: [BrowserModule, HttpClientModule, OAuthModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
