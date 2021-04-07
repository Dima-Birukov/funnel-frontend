import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuestionsDTO} from './question-handler.service';
import {Router} from '@angular/router';

export interface PolicyResponseDTO{
  policyResponse: ApiResponseType;
}
export enum ApiResponseType{
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

@Injectable({
  providedIn: 'root'
})
export class QuestionApiService {

  constructor(private httpClient: HttpClient,
              private router: Router) {}
  getQuestionsByPageId(pageId: number): Observable<Array<QuestionsDTO>>{
    return this.httpClient.get<Array<QuestionsDTO>>(`http://localhost:8084/question/${pageId}`);
  }

  submitQuestions(value: any): void {


    this.httpClient.post(`http://localhost:8084/policy/createPolicy`, value).subscribe(response =>{
        const serverMessage: string = (response as PolicyResponseDTO).policyResponse;
        this.router.navigate(['resultPage'], { queryParams: {result: serverMessage} });
    }
      );
  }
}
