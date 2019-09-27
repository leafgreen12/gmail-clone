import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SentComponent } from './sent/sent.component';
import { ImportantComponent } from './important/important.component';
import { TrashComponent } from './trash/trash.component';
import { StarredComponent } from './starred/starred.component';
import { DraftsComponent } from './drafts/drafts.component';
import { SharedComponentsModule } from '../shared/components/components.module';
import {CoreModule} from '../core/core.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule,
    CoreModule
  ],
  declarations: [
    SentComponent,
    ImportantComponent,
    TrashComponent,
    StarredComponent,
    DraftsComponent,
  ],
  exports: []
})
export class GmDetailModule { }
