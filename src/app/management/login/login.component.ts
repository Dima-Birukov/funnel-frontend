import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {StorageService} from '../../shared/storage/storage.service';
import {ParseArgumentException} from '@angular/cli/models/parser';
import {ManagementApiService} from '../services/management-api.service';

@Component({
  selector: 'fun-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../questions/questions-pages.css']
})
export class LoginComponent implements OnInit {
  emailValid = true;

  constructor(public router: Router,
              private managementApiService: ManagementApiService,
              private storageService: StorageService) { }

  ngOnInit(): void {
  }
  login(email: string): void{
    this.managementApiService.submitLoginEmail(email)
      .subscribe(response => {
        if (response.loginResponse === 'SUCCESS') {
          if (response.guid) {
            this.storageService.saveTokenAndEmail(response.guid, email);
            this.router.navigate(['management/tableView']);
          }
        } else {
          this.emailValid = false;
        }
      });
  }
}
