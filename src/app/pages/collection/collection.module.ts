import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollectionPage } from './collection.page';

import { CollectionPageRoutingModule } from './collection-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CollectionPageRoutingModule
  ],
  declarations: [CollectionPage]
})
export class CollectionPageModule {}
