import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import {DynamicModule} from './dynamic-control/dynamic.module';
import {FilterStringPipe} from './custom-pipe/filter-string.pipe';
import {HighlightDirective} from './component-directives/attribute-directive/highlight.directive';
import {UppercaseDirective} from './component-directives/attribute-directive/uppercase.directive';
import {UnlessDirective} from './component-directives/structural-directive/unless.directive';

@NgModule({
  declarations: [
    FilterStringPipe,
    HighlightDirective,
    UppercaseDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    DynamicModule
  ],
  exports: [
    MaterialModule,
    DynamicModule,
    FilterStringPipe,
    HighlightDirective,
    UppercaseDirective,
    UnlessDirective
  ]
})
export class CoreModule {

}
