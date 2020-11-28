import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalContentPageRoutingModule } from './modal-content-routing.module';

import { ModalContentPage } from './modal-content.page';
import { SettingsPage } from '../settings/settings.page';
import { SettingsPageModule } from '../settings/settings.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalContentPageRoutingModule,
    SettingsPageModule
  ],
  declarations: [ModalContentPage],
  entryComponents: [SettingsPage]
})
export class ModalContentPageModule {}
