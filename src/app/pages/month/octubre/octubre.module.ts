import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OctubrePageRoutingModule } from './octubre-routing.module';

import { OctubrePage } from './octubre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OctubrePageRoutingModule
  ],
  declarations: [OctubrePage]
})
export class OctubrePageModule {}
