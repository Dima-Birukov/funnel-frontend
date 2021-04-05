import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionsModule} from './questions/questions.module';
import {RouterModule} from '@angular/router';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'questions', pathMatch: 'full'},
      {path: 'questions',
      loadChildren: () => import('./questions/questions.module')
        .then(m => m.QuestionsModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// questions module
// dynamic router that excepts page id
// dynamic page, dependant on form builder and questions service
// form builder service
// get questions by page# service
