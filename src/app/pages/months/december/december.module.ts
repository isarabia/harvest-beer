import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DecemberPageRoutingModule } from './december-routing.module';

import { DecemberPage } from './december.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DecemberPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [DecemberPage]
})
export class DecemberPageModule {}
