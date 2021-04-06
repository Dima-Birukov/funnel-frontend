import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuestionsDTO} from './question-handler.service';


@Injectable({
  providedIn: 'root'
})
export class QuestionApiService {

  constructor(private httpClient: HttpClient) {}
  getQuestionsByPageId(pageId: number): Observable<Array<QuestionsDTO>>{
    return this.httpClient.get<Array<QuestionsDTO>>(`http://localhost:8084/question/${pageId}`);
  }

  submitQuestions(value: any): void {


    this.httpClient.post(`http://localhost:8084/policy/createPolicy`, value).subscribe(response =>
      console.log(response));
  }
}
