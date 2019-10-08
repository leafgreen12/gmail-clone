import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import {CoreModule} from '../core/core.module';
import {AppModule} from '../app.module';
import {DynamicComponentComponent} from '../dynamic-component/dynamic-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    CoreModule,
  ],
  declarations: [
    LoginComponent,
    DynamicComponentComponent
  ]
})
export class AuthModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
