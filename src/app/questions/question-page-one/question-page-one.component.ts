import { Component, OnInit } from '@angular/core';
import {QuestionHandlerService, QuestionsDTO} from '../services/question-handler.service';
import {FormGroup} from '@angular/forms';
import {QuestionFormBuilderService} from '../services/question-form-builder.service';
import {Router} from '@angular/router';

@Component({
  selector: 'fun-question-page-one',
  templateUrl: './question-page-one.component.html',
  styleUrls: ['./question-page-one.component.css']
})
export class QuestionPageOneComponent implements OnInit {

  // @ts-ignore
  public questionsArray: Array<QuestionsDTO>;
  private loading = false;

  constructor(public questionHandlerService: QuestionHandlerService,
              public router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.questionHandlerService.getQuestionsByPageId(1)
      .subscribe(questionsArr => this.questionsArray = questionsArr);
    this.loading = false;
  }
  isLoading(): boolean {
    return this.loading;
  }

}
