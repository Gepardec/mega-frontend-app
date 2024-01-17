import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';
import { UserService } from '../auth/user/user.service';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'mega-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [NgIf, MatCardModule, MatButtonModule],
})
export class LoginComponent {
  loggedOut = toSignal(
    this.userService.loggedIn$.pipe(map((loggedIn) => !loggedIn))
  );

  constructor(
    private oAuthService: OAuthService,
    private userService: UserService
  ) {}

  login() {
    this.oAuthService.initLoginFlow();
  }
}
