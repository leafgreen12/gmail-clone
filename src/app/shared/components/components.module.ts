import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailListItemComponent } from './email-list-item/email-list-item.component';
import {MaterialModule} from '../../core/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [EmailListItemComponent],
  exports: [EmailListItemComponent]
})
export class SharedComponentsModule { }
