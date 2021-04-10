import { Component, OnInit } from '@angular/core';
import {StorageService} from '../storage/storage.service';
import {Router} from '@angular/router';
import {ManagementApiService} from '../../management/services/management-api.service';

@Component({
  selector: 'fun-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private storageService: StorageService,
              private router: Router,
              private managementApiService: ManagementApiService) { }

  ngOnInit(): void {
  }
  logout(): void{
    this.managementApiService.logout(this.storageService.getEmail())
      .subscribe( response => {
        if (response.loginResponse === 'SUCCESS') {
          this.storageService.clearLocalStorage();
          this.router.navigate(['management/login']);
        }
        else {
          throw new Error('There was a problem logging out');
        }
      });
  }
  isLoggedIn(): boolean{
    return this.storageService.getToken() !== null;
  }

}
