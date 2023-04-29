import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { combineLatest, mergeMap, Observable, of } from 'rxjs';
import { KeycloakService } from "keycloak-angular";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public readonly keycloak: KeycloakService) {}

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
        const { enableBearerInterceptor, excludedUrls } = this.keycloak;
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
                ? next.handle(req)
              // ? this.handleRequestWithTokenHeader(req, next)
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
                debugger
                const kcReq = req.clone({ headers: headersWithBearer });
                return next.handle(kcReq);
            })
        );
    }
}
