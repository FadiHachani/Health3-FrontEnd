import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { AgmCoreModule } from '@agm/core';            // @agm/core
import { AgmDirectionModule } from 'agm-direction';   // agm-direction
import { DetailPharmacieComponent } from './detail-pharmacie/detail-pharmacie.component';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'AIzaSyCp7o7NVWKKkPT3L3_bRCUXIXxmq1k3hV4',
      libraries: ['geometry','places'],
    }),
    AgmDirectionModule,
  ],
  declarations: [ProfilePage,DetailPharmacieComponent],
  providers:[LocalNotifications]
  
})
export class ProfilePageModule {}
