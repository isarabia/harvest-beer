import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeerPageRoutingModule } from './beer-routing.module';

import { BeerPage } from './beer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeerPageRoutingModule
  ],
  declarations: [BeerPage]
})
export class BeerPageModule {}
