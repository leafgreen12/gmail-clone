import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },
    {
      type: 'date',
      name: 'date',
      label: 'Date',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: '',
      required: true,
      options: [
        { id: 1, name: 'Hà Nội'},
        { id: 2, name: 'TP Hồ Chí Minh'},
        { id: 3, name: 'Đà Nẵng'},
        { id: 4, name: 'Lào Cai'},
        { id: 5, name: 'Yên Bái'},
        { id: 6, name: 'Quảng Bình'},
        { id: 7, name: 'Thái Nguyên'},
        { id: 8, name: 'Daklak'},
        { id: 9, name: 'Nghệ An'},
        { id: 10, name: 'Hà Tĩnh'}
      ]
    },
    {
      type: 'multipleSelect',
      name: 'countryMultiple',
      label: 'Country',
      value: [],
      required: true,
      options: [
        { id: 1, name: 'Hà Nội'},
        { id: 2, name: 'TP Hồ Chí Minh'},
        { id: 3, name: 'Đà Nẵng'},
        { id: 4, name: 'Lào Cai'},
        { id: 5, name: 'Yên Bái'},
        { id: 6, name: 'Quảng Bình'},
        { id: 7, name: 'Thái Nguyên'},
        { id: 8, name: 'Daklak'},
        { id: 9, name: 'Nghệ An'},
        { id: 10, name: 'Hà Tĩnh'}
      ]
    },
    {
      type: 'radio',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
  ];
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/inbox';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigateByUrl(redirect, navigationExtras);
      }
    });
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
