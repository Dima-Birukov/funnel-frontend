import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {StorageService} from './storage/storage.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {InterceptorService} from '../management/services/interceptor.service';



@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StorageService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }
  ]
})
export class SharedModule { }
