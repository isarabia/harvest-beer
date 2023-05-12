import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarzoPageRoutingModule } from './marzo-routing.module';

import { MarzoPage } from './marzo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarzoPageRoutingModule
  ],
  declarations: [MarzoPage]
})
export class MarzoPageModule {}
