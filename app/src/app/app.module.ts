import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NavbarModule, GlobalHeaderModule } from "./components";
import { ActiveUserService, LocalStorageService } from "./services";
import { NotificationModule } from "./components/notification/notification.module";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

function initializeKeycloak(
  keycloak: KeycloakService
) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8484' + '/auth',
        realm: 'my_realm',
        clientId: 'service'
      },
      initOptions: {
        checkLoginIframe: false
      }
    });
}

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledNonBlocking' }),
        GlobalHeaderModule,
        NavbarModule,
        HttpClientModule,
        NotificationModule,
        KeycloakAngularModule
    ],
  providers: [
      ActiveUserService,
      LocalStorageService,
      KeycloakService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      {
        provide: APP_INITIALIZER,
        useFactory: initializeKeycloak,
        deps: [KeycloakService],
        multi: true
      }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
