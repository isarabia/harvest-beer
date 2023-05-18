import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CollectionPage } from './collection.page';

import { CollectionPageRoutingModule } from './collection-routing.module';
import { ButtonModule } from 'src/app/modules/button/button.module';
import { CardModule } from 'src/app/modules/card/card.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CollectionPageRoutingModule,
    ButtonModule,
    CardModule
  ],
  declarations: [CollectionPage]
})
export class CollectionPageModule {}
