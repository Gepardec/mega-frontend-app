import { ApplicationConfig, isDevMode } from '@angular/core';
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
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';

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
    provideTransloco({
      config: {
        availableLangs: ['de', 'en'],
        fallbackLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
