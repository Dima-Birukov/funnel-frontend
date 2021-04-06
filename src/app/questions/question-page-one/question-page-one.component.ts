import { Component, OnInit } from '@angular/core';
import {QuestionHandlerService, QuestionsDTO} from '../services/question-handler.service';
import {Router} from '@angular/router';
import {StorageService} from '../../shared/storage/storage.service';


@Component({
  selector: 'fun-question-page-one',
  templateUrl: './question-page-one.component.html',
  styleUrls: ['../questions-pages.css']
})
export class QuestionPageOneComponent implements OnInit {

  // @ts-ignore
  public questionsArray: Array<QuestionsDTO>;
  private loading = false;

  constructor(public questionHandlerService: QuestionHandlerService,
              public router: Router,
              public storageService: StorageService) { }

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
