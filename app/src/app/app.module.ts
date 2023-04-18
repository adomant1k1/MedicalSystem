import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NavbarModule, GlobalHeaderModule } from "./components";
import { ActiveUserService, LocalStorageService } from "./services";
import { NotificationModule } from "./components/notification/notification.module";
import { KeycloakService } from "./services/keycloak.service";

function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
                url: 'http://localhost:8484',
                realm: 'my_realm',
                clientId: 'service'
            },
            initOptions: {
                onLoad: 'check-sso',
                silentCheckSsoRedirectUri:
                    window.location.origin + '/assets/silent-check-sso.html'
            }
        });
}

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
        GlobalHeaderModule,
        NavbarModule,
        NotificationModule,

    ],
  providers: [
      ActiveUserService,
      LocalStorageService,
      /*KeycloakService,
      {
          provide: APP_INITIALIZER,
          useFactory: initializeKeycloak,
          multi: true,
          deps: [KeycloakService]
      }*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
