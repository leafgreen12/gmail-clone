import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {InboxComponent} from './inboxComponent/inbox.component';
import {PrimaryComponent} from './primary/primary.component';
import {PromotionsComponent} from './promotions/promotions.component';
import {SocialComponent} from './social/social.component';
import {CoreModule} from '../../core/core.module';
import {routes} from './inbox.routing';
import {SharedComponentsModule} from '../../shared/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    SharedComponentsModule,
  ],
  declarations: [
    InboxComponent,
    PrimaryComponent,
    PromotionsComponent,
    SocialComponent
  ]
})
export class GmInboxModule { }
