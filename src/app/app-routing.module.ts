import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ImportantComponent} from './gm-detail/important/important.component';
import {SentComponent} from './gm-detail/sent/sent.component';
import {TrashComponent} from './gm-detail/trash/trash.component';
import {StarredComponent} from './gm-detail/starred/starred.component';
import {DraftsComponent} from './gm-detail/drafts/drafts.component';
import {AuthGuard} from './auth/auth.guard';
import {MainComponent} from './main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
