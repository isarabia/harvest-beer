import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JunePageRoutingModule } from './june-routing.module';

import { JunePage } from './june.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JunePageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [JunePage]
})
export class JunePageModule {}
