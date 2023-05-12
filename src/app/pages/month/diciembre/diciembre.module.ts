import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiciembrePageRoutingModule } from './diciembre-routing.module';

import { DiciembrePage } from './diciembre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiciembrePageRoutingModule
  ],
  declarations: [DiciembrePage]
})
export class DiciembrePageModule {}
