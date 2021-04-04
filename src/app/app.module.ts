import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionsModule} from './questions/questions.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QuestionsModule
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
