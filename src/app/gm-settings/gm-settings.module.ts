import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { GeneralComponent } from './general/general.component';
import { InboxComponent } from './inbox/inbox.component';
import { LabelsComponent } from './labels/labels.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ChatComponent } from './chat/chat.component';
import { LabsComponent } from './labs/labs.component';
import { ThemesComponent } from './themes/themes.component';
import { routes } from './gm-settings.routing';
import {CoreModule} from '../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
  ],
  declarations: [SettingsComponent, GeneralComponent, InboxComponent, LabelsComponent,
    AccountsComponent, ChatComponent, LabsComponent, ThemesComponent]
})
export class GmSettingsModule { }
