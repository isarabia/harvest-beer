import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JulioPageRoutingModule } from './julio-routing.module';

import { JulioPage } from './julio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JulioPageRoutingModule
  ],
  declarations: [JulioPage]
})
export class JulioPageModule {}
