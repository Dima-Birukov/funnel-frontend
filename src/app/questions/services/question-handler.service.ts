import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {finalize, tap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {QuestionApiService} from './question-api.service';
import {QuestionFormBuilderService} from './question-form-builder.service';


export interface QuestionsDTO{
  questionID: string;
  questionName: string;
  questionType: QuestionType;

}

export enum QuestionType {
  DATE_PICKER = 'DATE_PICKER',
  RADIO_BUTTON = 'RADIO_BUTTON',
  TEXT = 'TEXT',
  CHECKBOX = 'CHECKBOX'
}

@Injectable()
export class QuestionHandlerService {

  questionsForm: FormGroup;

  constructor(private httpClient: HttpClient,
              private questionApiService: QuestionApiService) {
    this.questionsForm = new FormGroup({});

  }

  getQuestionsByPageId(pageId: number): Observable<Array<QuestionsDTO>>{

    return this.questionApiService.getQuestionsByPageId(pageId).pipe(
      tap(questionsArr => QuestionFormBuilderService.buildFormFromQuestions(questionsArr, this.questionsForm))
    );

  }
}
