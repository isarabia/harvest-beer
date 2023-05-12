import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MayoPageRoutingModule } from './mayo-routing.module';

import { MayoPage } from './mayo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MayoPageRoutingModule
  ],
  declarations: [MayoPage]
})
export class MayoPageModule {}
