import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FilterFields, PolicyAddressResponseDto, PolicyViewResponseDto, SessionResponseDto} from '../entities/management-classes';

@Injectable({
  providedIn: 'root'
})
export class ManagementApiService {
  constructor(private httpClient: HttpClient) {
  }

  submitLoginEmail(email: string): Observable<SessionResponseDto> {
    return this.httpClient.post<SessionResponseDto>(`http://localhost:8084/session/login`, email);
  }

  logout(email: string | null): Observable<SessionResponseDto> {
    return this.httpClient.post<SessionResponseDto>(`http://localhost:8084/session/logout`, email);
  }

  submitFilterFields(filterFields: FilterFields): Observable<PolicyViewResponseDto> {
    return this.httpClient.post<PolicyViewResponseDto>(`http://localhost:8084/policy/getPolicyView`, filterFields);
  }
  getFullAddress(email: string): Observable<PolicyAddressResponseDto>{
    let params = new HttpParams();
    params = params.append('email', email);
    return this.httpClient.get<PolicyAddressResponseDto>(`http://localhost:8084/policy/getPolicyAddress`, {params});
  }
}
