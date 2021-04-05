import { Component, OnInit } from '@angular/core';
import {QuestionHandlerService, QuestionsDTO} from '../services/question-handler.service';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {QuestionFormBuilderService} from '../services/question-form-builder.service';

@Component({
  selector: 'fun-question-page-two',
  templateUrl: './question-page-two.component.html',
  styleUrls: ['./question-page-two.component.css']
})
export class QuestionPageTwoComponent implements OnInit {

  // @ts-ignore
  public questionsArray: Array<QuestionsDTO>;
  private loading = false;

  constructor(public questionHandlerService: QuestionHandlerService,
              public router: Router) { }

  ngOnInit(): void {
    this.loading = true;
    this.questionHandlerService.getQuestionsByPageId(2)
      .subscribe(questionsArr => this.questionsArray = questionsArr);
    this.loading = false;
  }
  isLoading(): boolean {
    return this.loading;
  }

}
