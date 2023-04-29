import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

import { ActiveUserService } from "./services";
import { HttpClient } from '@angular/common/http';
import { User } from './types/user.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public readonly title = 'Medical System';

  public isLoggedIn = false;

  public roles: string[] = [];

  public userProfile: any | null = null;

  constructor(
    public readonly http: HttpClient,
    public readonly userService: ActiveUserService,
    private readonly keycloak: KeycloakService
  ) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      this.roles = await this.keycloak.getUserRoles()
      const role = this.roles
        .map(it => ['ADMIN', 'DOCTOR', 'PATIENT'].includes(it) ? it : null)
        .filter(x => x);
      this.http.get<User>('http://localhost:4000/user-service/admin/me', {})
        .subscribe((it: User)=> this.userService.loadProfile(Object.assign({ role }, it)));
    } else {
      this.login();
    }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
}
