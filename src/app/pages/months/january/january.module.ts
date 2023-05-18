import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JanuaryPageRoutingModule } from './january-routing.module';

import { JanuaryPage } from './january.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';
import { ButtonModule } from 'src/app/modules/button/button.module';
import { CardModule } from 'src/app/modules/card/card.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JanuaryPageRoutingModule,
    RedirectModule,
    ButtonModule,
    CardModule
  ],
  declarations: [JanuaryPage]
})
export class JanuaryPageModule {}
