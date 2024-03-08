import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot(),
    TranslocoTestingModule.forRoot({
      translocoConfig: {
        availableLangs: ['de', 'en'],
        defaultLang: 'en',
      },
    }),
  ],
  providers: [],
})
export class TestingModule {}
