import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OctoberPageRoutingModule } from './october-routing.module';

import { OctoberPage } from './october.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OctoberPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [OctoberPage]
})
export class OctoberPageModule {}
