import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeptemberPageRoutingModule } from './september-routing.module';

import { SeptemberPage } from './september.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeptemberPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [SeptemberPage]
})
export class SeptemberPageModule {}
