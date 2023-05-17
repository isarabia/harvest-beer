import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AprilPageRoutingModule } from './april-routing.module';

import { AprilPage } from './april.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AprilPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [AprilPage]
})
export class AprilPageModule {}
