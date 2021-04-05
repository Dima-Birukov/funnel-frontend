import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {QuestionsDTO} from './question-handler.service';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionApiService {

  constructor(private httpClient: HttpClient) {}
  getQuestionsByPageId(pageId: number): Observable<Array<QuestionsDTO>>{
    return this.httpClient.get<Array<QuestionsDTO>>(`http://localhost:8084/question/${pageId}`);
  }
}
