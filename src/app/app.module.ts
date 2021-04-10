import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionsModule} from './questions/questions.module';
import {RouterModule} from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    QuestionsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'questions', pathMatch: 'full'},
      {
        path: 'questions',
        loadChildren: () => import('./questions/questions.module')
          .then(m => m.QuestionsModule)
      },
      {
        path: 'management',
        loadChildren: () => import('./management/management.module')
          .then(m => m.ManagementModule)
      }
    ]),
    SharedModule
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
