import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthConfig } from 'angular-oauth2-oidc';
import { Config } from '../model/Config';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly authConfig: AuthConfig = {
    redirectUri: window.location.origin,
    strictDiscoveryDocumentValidation: false,
    showDebugInformation: false,
    sessionChecksEnabled: false,
    responseType: 'code',
  };

  private readonly cypressAuthConfig: AuthConfig & { oidc: boolean } = {
    ...this.authConfig,
    oidc: false,
  };

  private config!: Config;

  constructor(private httpClient: HttpClient) {}

  getConfig(): Observable<Config> {
    if (this.config) {
      return new BehaviorSubject(this.config);
    } else {
      return this.httpClient
        .get<Config>(this.getBackendUrlWithContext('/config'))
        .pipe(tap((resultConfig) => (this.config = resultConfig)));
    }
  }

  getBackendUrl(): string {
    // TODO pfusch ???
    return window.location.origin.replace(
      environment.frontendOriginSegment,
      environment.backendOriginSegment
    );
  }

  getBackendUrlWithContext(context: string): string {
    return this.getBackendUrl() + context;
  }

  getAuthConfig() {
    const cypressTypedWindow = window as typeof window & { Cypress: unknown };

    return cypressTypedWindow.Cypress
      ? this.cypressAuthConfig
      : this.authConfig;
  }
}
