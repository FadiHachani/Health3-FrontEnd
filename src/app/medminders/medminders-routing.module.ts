import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedmindersPage } from './medminders.page';

const routes: Routes = [
  {
    path: '',
    component: MedmindersPage
  },
  {
    path: 'reminder',
    loadChildren: () => import('../reminder/reminder.module').then( m => m.ReminderPageModule)
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedmindersPageRoutingModule {}
