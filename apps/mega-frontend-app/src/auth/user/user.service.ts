import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user$ = new BehaviorSubject<User | undefined>(undefined);

  loggedIn$ = combineLatest([this.oAuthService.events, this.user$]).pipe(
    map(([events, user]) => {
      // returns false if user is removed
      return user && this.oAuthService.hasValidAccessToken();
    })
  );

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private oAuthService: OAuthService,
    private configService: ConfigService
  ) {}

  /**
   * Retrieves the user information from the backend server.
   * Call this method AFTER oauth flow!
   */
  public retrieveUser(): void {
    this.httpClient
      .get<User>(this.configService.getBackendUrlWithContext('/user'))
      .subscribe((result) => {
        this.user$.next(result);
      });
  }

  public logout(): void {
    this.invalidateUser();
  }

  public logoutWithoutRedirect(): void {
    this.invalidateUser();
  }

  invalidateUser() {
    this.oAuthService.logOut();
    this.user$.next(undefined);
  }

  public loggedInWithGoogle(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }
}
