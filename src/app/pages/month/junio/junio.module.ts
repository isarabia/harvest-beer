import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JunioPageRoutingModule } from './junio-routing.module';

import { JunioPage } from './junio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JunioPageRoutingModule
  ],
  declarations: [JunioPage]
})
export class JunioPageModule {}
