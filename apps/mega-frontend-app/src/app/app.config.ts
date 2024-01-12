import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { OAuthModuleConfig, provideOAuthClient } from 'angular-oauth2-oidc';
import { authConfigFactory } from '../auth/auth.config.factory';
import { ConfigService } from '../auth/config/config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    provideOAuthClient(),
    {
      provide: OAuthModuleConfig,
      useFactory: authConfigFactory,
      deps: [ConfigService],
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
