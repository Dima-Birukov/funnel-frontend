import { Injectable } from '@angular/core';
import {QuestionHandlerService, QuestionsDTO} from './question-handler.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export class QuestionFormBuilderService {

  public static buildFormFromQuestions(questionArray: Array<QuestionsDTO>,
                                       questionsForm: FormGroup): void{
    questionArray.forEach(question => {
      const initialValue = localStorage.getItem(question.questionID);
      questionsForm.addControl(question.questionID, new FormControl(
          question.questionType === 'CHECKBOX' ? false : (initialValue || ''),
          [Validators.required]));
    });
  }

}
