import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { DetailPharmacieComponent } from './detail-pharmacie/detail-pharmacie.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'detailPharmacie',
    component: DetailPharmacieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
