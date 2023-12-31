import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, catchError, filter, finalize, Observable, switchMap, take, tap } from 'rxjs';
import { logOut } from 'src/app/auth/auth-store/auth.actions';
import { AuthState } from 'src/app/auth/auth-store/reducers';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LocalStorageService } from 'src/app/auth/services/local-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  isRefreshingToken = false;
  tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private localStorageService: LocalStorageService, private authService: AuthService, private store: Store<AuthState>) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authRequest: HttpRequest<unknown> = request.url.includes(this.authService.URL) ? request : this.addAccessTokenHeader(request, this.localStorageService.getAccessCode());

    return next.handle(authRequest).pipe(
      catchError((error: Response) => {
        if (error.status === 401 && !authRequest.url.includes(this.authService.URL)) {
          return this.refreshToken(request, next, this.localStorageService.getRefreshCode());
        }

        throw error;
      })
    );
  }

  addAccessTokenHeader(request: HttpRequest<unknown>, accessToken: string) {
    return request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } });
  }

  refreshToken(request: HttpRequest<unknown>, next: HttpHandler, refreshToken: string) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;

      this.tokenSubject.next(null);
      return this.authService.refreshToken(refreshToken).pipe(
        switchMap((response) => {
          this.tokenSubject.next(response.access_token);
          return next.handle(this.addAccessTokenHeader(request, response.access_token)).pipe(
            tap({
              next: () => {
                this.localStorageService.saveTokens(response);
              },
            })
          );
        }),
        catchError((error) => {
          this.store.dispatch(logOut());

          throw error;
        }),
        finalize(() => {
          this.isRefreshingToken = false;
        })
      );
    } else {
      return this.tokenSubject.pipe(
        filter((token) => token !== null),
        take(1),
        switchMap((token) => {
          return next.handle(this.addAccessTokenHeader(request, token as string));
        })
      );
    }
  }
}
