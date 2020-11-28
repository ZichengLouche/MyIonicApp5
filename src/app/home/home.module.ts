import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedComponentsModule } from '../components/shared-components.module';
import { ModalContentPageModule } from '../pages/modal-content/modal-content.module';
import { ModalBaseComponent } from '../components/modal-base/modal-base.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedComponentsModule,
    ModalContentPageModule
  ],
  declarations: [HomePage],
  entryComponents:[ModalBaseComponent]
})
export class HomePageModule {}
