import { Component, OnInit } from '@angular/core';
import {QuestionHandlerService, QuestionsDTO} from '../services/question-handler.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'fun-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  // @ts-ignore
  public questionsForm: FormGroup;
  // @ts-ignore
  public questionsArray: Array<QuestionsDTO>;
  public nextActionLabel = 'Next';

  constructor(private questionHandlerService: QuestionHandlerService){
  }


  ngOnInit(): void {}

  nextAction(): void{

  }
}
