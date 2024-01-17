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

  public loginUser(): void {
    this.httpClient
      .get<User>(this.configService.getBackendUrlWithContext('/user'))
      .subscribe((result) => {
        this.user$.next(result);
        this.navigateToStartpage();
      });
  }

  public logout(): void {
    this.invalidateUser();
    this.router.navigate(['login']);
    // TODO richtige url mit config etc... - abstimmung ?
    // this.router.navigate([configuration.PAGE_URLS.LOGIN]);
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

  // TODO wtf?
  // public setStartpageOverride(startpage?: string): void {
  //   !startpage
  //     ? this.localStorageService.removeUserStartPage()
  //     : this.localStorageService.saveUserStartPage(startpage);
  // }

  // TODO wtf
  // public getStartpageOverride(): string {
  //   return this.localStorageService.getUserStartPage();
  // }

  private navigateToStartpage() {
    // const startpage = this.getStartpageOverride()
    //   ? this.getStartpageOverride()
    //   : '';
    // TODO richtige url mit config etc... - abstimmung ?
    // : configuration.PAGE_URLS.MONTHLY_REPORT;
    // this.setStartpageOverride(undefined);
    // TODO richtig stellen
    this.router.navigate(['']);
  }
}
