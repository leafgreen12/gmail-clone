import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import {DynamicModule} from './dynamic-control/dynamic.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    DynamicModule
  ],
  exports: [
    MaterialModule,
    DynamicModule
  ]
})
export class CoreModule {

}
