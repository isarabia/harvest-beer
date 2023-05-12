import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EneroPageRoutingModule } from './enero-routing.module';

import { EneroPage } from './enero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EneroPageRoutingModule
  ],
  declarations: [EneroPage]
})
export class EneroPageModule {}
