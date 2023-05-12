import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoviembrePageRoutingModule } from './noviembre-routing.module';

import { NoviembrePage } from './noviembre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoviembrePageRoutingModule
  ],
  declarations: [NoviembrePage]
})
export class NoviembrePageModule {}
