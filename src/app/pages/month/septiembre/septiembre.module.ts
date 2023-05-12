import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeptiembrePageRoutingModule } from './septiembre-routing.module';

import { SeptiembrePage } from './septiembre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeptiembrePageRoutingModule
  ],
  declarations: [SeptiembrePage]
})
export class SeptiembrePageModule {}
