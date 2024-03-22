import { OAuthModuleConfig } from 'angular-oauth2-oidc';
import { ConfigService } from './config/config.service';

export function authConfigFactory(
  configService: ConfigService
): OAuthModuleConfig {
  return {
    resourceServer: {
      allowedUrls: [configService.getBackendUrl()],
      sendAccessToken: true,
    },
  };
}
