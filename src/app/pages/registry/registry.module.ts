import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistryPage } from './registry.page';

import { RegistryPageRoutingModule } from './registry-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegistryPageRoutingModule
  ],
  declarations: [RegistryPage]
})

export class RegistryPageModule {}
