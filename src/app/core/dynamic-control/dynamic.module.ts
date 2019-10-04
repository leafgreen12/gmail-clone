import {RouterModule} from '@angular/router';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {TextInputComponent} from './text-input/text-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {SelectInputComponent} from './select-input/select-input.component';
import {MultipleSelectInputComponent} from './multiple-select-input/multiple-select-input.component';
import {DateInputComponent} from './date-input/date-input.component';
import {FileInputComponent} from './file-input/file-input.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    TextInputComponent,
    SelectInputComponent,
    MultipleSelectInputComponent,
    DateInputComponent,
    FileInputComponent
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    CommonModule
  ],
  exports: [
    DynamicFormComponent,
    TextInputComponent,
    SelectInputComponent,
    MultipleSelectInputComponent,
    DateInputComponent,
    FileInputComponent
  ]
})
export class DynamicModule {

}
