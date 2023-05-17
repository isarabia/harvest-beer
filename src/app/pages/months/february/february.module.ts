import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FebruaryPageRoutingModule } from './february-routing.module';

import { FebruaryPage } from './february.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FebruaryPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [FebruaryPage]
})
export class FebruaryPageModule {}
