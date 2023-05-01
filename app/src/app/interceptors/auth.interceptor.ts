import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, combineLatest, mergeMap, Observable, of, throwError } from 'rxjs';
import { KeycloakService } from "keycloak-angular";
import { NotificationService } from '../components/notification/services';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
      private readonly notificationService: NotificationService,
      private readonly keycloak: KeycloakService
    ) {}

    /**
     * Calls to update the keycloak token if the request should update the token.
     *
     * @param req http request from @angular http module.
     * @returns
     * A promise boolean for the token update or noop result.
     */
    private async conditionallyUpdateToken(
      req: HttpRequest<unknown>
    ): Promise<boolean> {
        if (this.keycloak.shouldUpdateToken(req)) {
            return await this.keycloak.updateToken();
        }

        return true;
    }

    /*
     * Intercept implementation that checks if the request url matches the excludedUrls.
     * If not, adds the Authorization header to the request if the user is logged in.
     *
     * @param req
     * @param next
     */
    public intercept(
        req: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const { enableBearerInterceptor } = this.keycloak;
        if (!enableBearerInterceptor) {
            return next.handle(req);
        }

        const shallPass: boolean =
            (this.keycloak?.shouldAddToken && !this.keycloak.shouldAddToken(req));
        if (shallPass) {
            return next.handle(req);
        }

        return combineLatest([
            this.conditionallyUpdateToken(req),
            this.keycloak.isLoggedIn()
        ]).pipe(
          mergeMap(([_, isLoggedIn]) =>
            isLoggedIn
              ? this.handleRequestWithTokenHeader(req, next)
              : next.handle(req)
          )
        );
    }

    /**
     * Adds the token of the current user to the Authorization header
     *
     * @param req
     * @param next
     */
    private handleRequestWithTokenHeader(
        req: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        return this.keycloak.addTokenToHeader(req.headers).pipe(
            mergeMap((headersWithBearer) => {
                const kcReq = req.clone({ headers: headersWithBearer });
                return next.handle(kcReq).pipe(
                  catchError((error: HttpErrorResponse) => {
                      let errorMsg = '';
                      if (error.error instanceof ErrorEvent) {
                          errorMsg = `Ошибка: ${error.error.message}`;
                          this.notificationService.showErrorMessage(
                            'Клиентская ошибка', errorMsg);
                      } else {
                          errorMsg = `Код ошибки: ${error.status},  Сообщение: ${error.message}`;
                          this.notificationService.showErrorMessage('Серверная ошибка', errorMsg)
                      }

                      return throwError(errorMsg);
                  })
                );
            })
        );
    }
}
