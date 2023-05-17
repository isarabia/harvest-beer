import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovemberPageRoutingModule } from './november-routing.module';

import { NovemberPage } from './november.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovemberPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [NovemberPage]
})
export class NovemberPageModule {}
