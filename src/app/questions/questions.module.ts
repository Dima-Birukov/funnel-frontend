import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {QuestionHandlerService} from './services/question-handler.service';
import {ReactiveFormsModule} from '@angular/forms';
import { QuestionPageOneComponent } from './question-page-one/question-page-one.component';
import { QuestionPageTwoComponent } from './question-page-two/question-page-two.component';
import { QuestionResultPageComponent } from './question-result-page/question-result-page.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';





@NgModule({
  declarations: [QuestionPageOneComponent, QuestionPageTwoComponent, QuestionResultPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', redirectTo: '1', pathMatch: 'full'},
      {path: '1', component: QuestionPageOneComponent},
      {path: '2', component: QuestionPageTwoComponent},
      {path: 'resultPage', component: QuestionResultPageComponent}
    ])
  ],
  exports: [
    QuestionPageOneComponent, QuestionPageTwoComponent, QuestionResultPageComponent
  ],
  providers: [QuestionHandlerService]
})
export class QuestionsModule { }
