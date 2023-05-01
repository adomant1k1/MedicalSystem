import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { ActiveUserService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class CanActivateQuestionnairesGuard implements CanActivate {
  constructor(
    public readonly userService: ActiveUserService,
    public readonly router: Router
  ) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.userService?.profile?.role === 'DOCTOR' || this.userService?.profile?.role === 'PATIENT'
  }
}