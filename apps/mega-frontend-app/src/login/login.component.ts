import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { UserService } from '../auth/user/user.service';

@Component({
  selector: 'mega-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [NgIf, MatCardModule, MatButtonModule],
})
export class LoginComponent {
  constructor(
    private oAuthService: OAuthService,
    private userService: UserService
  ) {}

  login() {
    this.oAuthService.initLoginFlow();
  }

  loggedIn() {
    return this.userService.loggedInWithGoogle();
  }
}
