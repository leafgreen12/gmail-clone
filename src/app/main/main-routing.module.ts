
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import {AuthGuard} from '../auth/auth.guard';
import {ImportantComponent} from '../gm-detail/important/important.component';
import {SentComponent} from '../gm-detail/sent/sent.component';
import {TrashComponent} from '../gm-detail/trash/trash.component';
import {StarredComponent} from '../gm-detail/starred/starred.component';
import {DraftsComponent} from '../gm-detail/drafts/drafts.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'inbox',
        loadChildren: () => import('../gm-detail/inbox/inbox.module').then(m => m.GmInboxModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'important',
        component: ImportantComponent,
        canLoad: [AuthGuard]
      },
      {
        path: 'sent',
        component: SentComponent,
        canLoad: [AuthGuard]
      },
      {
        path: 'trash',
        component: TrashComponent,
        canLoad: [AuthGuard]
      },
      {
        path: 'starred',
        component: StarredComponent,
        canLoad: [AuthGuard]
      },
      {
        path: 'drafts',
        component: DraftsComponent,
        canLoad: [AuthGuard]
      },
      {
        path: 'settings',
        loadChildren: () => import('../gm-settings/gm-settings.module').then(m => m.GmSettingsModule),
        canLoad: [AuthGuard]
      },
      {
        path: ':section',
        loadChildren: () => import('../gm-email/gm-email.module').then(m => m.GmEmailModule),
        canLoad: [AuthGuard],
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainsRoutingModule { }
