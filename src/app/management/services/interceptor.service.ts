import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from '../../shared/storage/storage.service';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor(private storage: StorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.storage.getToken()}`
      }
    });
    return next.handle(request);
  }
}
