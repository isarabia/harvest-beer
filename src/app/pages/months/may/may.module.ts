import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayPageRoutingModule } from './may-routing.module';

import { MayPage } from './may.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [MayPage]
})
export class MayPageModule {}
