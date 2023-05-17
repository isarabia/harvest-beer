import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AugustPageRoutingModule } from './august-routing.module';

import { AugustPage } from './august.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AugustPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [AugustPage]
})
export class AugustPageModule {}
