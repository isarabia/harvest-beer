import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FebreroPageRoutingModule } from './febrero-routing.module';

import { FebreroPage } from './febrero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FebreroPageRoutingModule
  ],
  declarations: [FebreroPage]
})
export class FebreroPageModule {}
