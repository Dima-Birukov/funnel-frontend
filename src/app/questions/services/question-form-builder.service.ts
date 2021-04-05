import { Injectable } from '@angular/core';
import {QuestionHandlerService, QuestionsDTO} from './question-handler.service';
import {FormControl, FormGroup} from '@angular/forms';

export class QuestionFormBuilderService {

  public static buildFormFromQuestions(questionArray: Array<QuestionsDTO>,
                                       questionsForm: FormGroup): void{
    questionArray.forEach(question => {
      questionsForm.addControl(question.questionID, new FormControl());
    });
  }

}
