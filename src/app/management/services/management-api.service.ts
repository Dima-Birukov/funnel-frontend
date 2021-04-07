import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ApiResponseType} from '../../questions/services/question-api.service';
import {Observable} from 'rxjs';

export interface SessionResponseDto{
  guid: string | null;
  loginResponse: ApiResponseType;
}


@Injectable({
  providedIn: 'root'
})
export class ManagementApiService {
  constructor(private httpClient: HttpClient,
              private router: Router) {
  }
  submitLoginEmail(email: string): Observable<SessionResponseDto>{

    return this.httpClient.post<SessionResponseDto>(`http://localhost:8084/session/login`, email);
  }
}
