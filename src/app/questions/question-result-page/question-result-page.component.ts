import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'fun-question-result-page',
  templateUrl: './question-result-page.component.html',
  styleUrls: ['./question-result-page.component.css']
})
export class QuestionResultPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  isSuccessPage(): Observable<boolean>{
    return this.route.queryParams
      .pipe( map( value => value.result === 'SUCCESS')
    );
  }
  ngOnInit(): void {
  }

}
