import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RegisterComponent} from './register.component';
import {routes} from './register.routing';
import {DynamicModule} from '../core/dynamic-control/dynamic.module';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    DynamicModule,
    CoreModule,
  ],
  exports: [RouterModule],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule {
}
