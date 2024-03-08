import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { OAuthService } from 'angular-oauth2-oidc';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../auth/user/user.service';
import { ConfigService } from '../auth/config/config.service';
import { AsyncPipe } from '@angular/common';
import { getBrowserLang, TranslocoService } from '@ngneat/transloco';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, AsyncPipe],
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
    translocoService: TranslocoService,
    matIconRegistry: MatIconRegistry
  ) {
    translocoService.setActiveLang(getBrowserLang()!);
    matIconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }

  async ngOnInit(): Promise<void> {
    const config = await firstValueFrom(this.configService.getConfig());
    console.log('config', config);
    this.oAuthService.configure({
      clientId: config.clientId,
      issuer: config.issuer,
      scope: config.scope,
      ...this.configService.getAuthConfig(),
    });

    await this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    this.oAuthService.setupAutomaticSilentRefresh();

    if (this.userService.loggedInWithGoogle()) {
      console.log('logged in with google');
      this.userService.retrieveUser();
    } else {
      console.log('login flow initiated');
      this.oAuthService.initLoginFlow();
    }
  }
}
