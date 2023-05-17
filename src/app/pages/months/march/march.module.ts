import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarchPageRoutingModule } from './march-routing.module';

import { MarchPage } from './march.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarchPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [MarchPage]
})
export class MarchPageModule {}
