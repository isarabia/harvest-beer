import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBeerPageRoutingModule } from './add-beer-routing.module';

import { AddBeerPage } from './add-beer.page';
import { RedirectModule } from 'src/app/modules/redirect/redirect.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBeerPageRoutingModule,
    RedirectModule
  ],
  declarations: [AddBeerPage]
})
export class AddBeerPageModule {}
