import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploaderPageRoutingModule } from './uploader-routing.module';

import { UploaderPage } from './uploader.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploaderPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [UploaderPage]
})
export class UploaderPageModule {}
