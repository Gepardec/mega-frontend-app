import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from '../header/header.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../auth/user/user.service';
import { ConfigService } from '../auth/config/config.service';
import { AsyncPipe } from '@angular/common';
import { getBrowserLang, TranslocoService } from '@ngneat/transloco';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, HeaderComponent, AsyncPipe],
  selector: 'mega-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mega-frontend-app';

  constructor(
    private oAuthService: OAuthService,
    private configService: ConfigService,
    public userService: UserService,
    translocoService: TranslocoService
  ) {
    translocoService.setActiveLang(getBrowserLang()!);
  }

  async ngOnInit(): Promise<void> {
    const config = await firstValueFrom(this.configService.getConfig());

    this.oAuthService.configure({
      clientId: config.clientId,
      issuer: config.issuer,
      scope: config.scope,
      ...this.configService.getAuthConfig(),
    });

    await this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    this.oAuthService.setupAutomaticSilentRefresh();

    if (this.userService.loggedInWithGoogle()) {
      this.userService.retrieveUser();
    } else {
      this.oAuthService.initLoginFlow();
    }
  }
}
