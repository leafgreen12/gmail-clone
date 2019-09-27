import { Routes } from '@angular/router';
import {PrimaryComponent} from './primary/primary.component';
import {SocialComponent} from './social/social.component';
import {PromotionsComponent} from './promotions/promotions.component';
import {InboxComponent} from './inboxComponent/inbox.component';

export const routes: Routes = [
  {
    path: '',
    component: InboxComponent,
    children: [
      {
        path: '',
        redirectTo: 'primary',
        pathMatch: 'full'
      },
      {
        path: 'primary',
        component: PrimaryComponent
      },
      {
        path: 'social',
        component: SocialComponent
      },
      {
        path: 'promotions',
        component: PromotionsComponent
      }
    ]
  }
];


