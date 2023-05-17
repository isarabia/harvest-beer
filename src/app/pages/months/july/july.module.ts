import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JulyPageRoutingModule } from './july-routing.module';

import { JulyPage } from './july.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JulyPageRoutingModule,
    RedirectModule,
    ButtonModule
  ],
  declarations: [JulyPage]
})
export class JulyPageModule {}
