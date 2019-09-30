import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {TextInputComponent} from './text-input/text-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {SelectInputComponent} from './select-input/select-input.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    TextInputComponent,
    SelectInputComponent
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    DynamicFormComponent,
    TextInputComponent,
    SelectInputComponent
  ]
})
export class DynamicModule {

}
