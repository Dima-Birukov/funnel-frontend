import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';


interface QuestionsDTO{
 questionId: string;
 questionText: string;
 questionType: QuestionType;

}

enum QuestionType {
  DATE_PICKER,
  RADIO_BUTTON,
  TEXT,
  CHECKBOX
}

@Injectable({
  providedIn: 'root'
})
export class QuestionHandlerService {

  private questionsSubject$: BehaviorSubject<Array<QuestionsDTO>>;
  questions$: Observable<Array<QuestionsDTO>>;

  constructor(private httpClient: HttpClient) {
    this.questionsSubject$ = new BehaviorSubject<Array<QuestionsDTO>>([]);
    this.questions$ = this.questionsSubject$.asObservable();
  }

  getQuestionsByPageId(pageId: number): void{
    this.httpClient.get<Array<QuestionsDTO>>(`http://localhost:8084/swagger#/Question/getQuestions/${pageId}`)
      .subscribe( questions => this.questionsSubject$.next(questions));
  }
}
