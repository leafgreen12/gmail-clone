import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { GmTopNavModule } from './gm-top-nav/gm-top-nav.module';
import { GmSideNavModule } from './gm-side-nav/gm-side-nav.module';
import { GmEmailModule } from './gm-email/gm-email.module';
import { GmDetailModule } from './gm-detail/gm-detail.module';
import { SharedModule } from './shared/shared.module';
import {RegisterModule} from './register/register.module';
import {AuthModule} from './auth/auth.module';
import {MainComponent} from './main/main.component';
import {MainsRoutingModule} from './main/main-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    RegisterModule,
    AuthModule,
    MainsRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GmTopNavModule,
    GmSideNavModule,
    GmEmailModule,
    CoreModule,
    GmDetailModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
