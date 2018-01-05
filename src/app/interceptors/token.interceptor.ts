import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    public auth: AuthService
  ){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // If has Login, dont send authorization
    if (request.url.indexOf("/login") < 0) {
      request = request.clone({
        setHeaders: {
          'authorization': `Bearer ${this.auth.getToken()}`
        }
      });
    }
    
    return next.handle(request);

  }
}