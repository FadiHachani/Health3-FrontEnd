import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedmindersPageRoutingModule } from './medminders-routing.module';

import { MedmindersPage } from './medminders.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedmindersPageRoutingModule
  ],
  declarations: [MedmindersPage],
  providers:[LocalNotifications]
})
export class MedmindersPageModule {}
