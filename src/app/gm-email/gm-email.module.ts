import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmailComponent } from './email/email.component';
import { routes } from './gm-email.routing';
import {MaterialModule} from '../core/material/material.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [EmailComponent]
})
export class GmEmailModule { }
