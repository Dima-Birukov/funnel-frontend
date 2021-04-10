import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from '../../shared/storage/storage.service';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor(private storage: StorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const bearer = {
      token: this.storage.getToken(),
      email: this.storage.getEmail()
    };
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${JSON.stringify(bearer)}`
      }
    });
    return next.handle(request);
  }
}
