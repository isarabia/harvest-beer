import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateCardComponent } from 'src/app/components/date-card/date-card.component';
import { BeerCardComponent } from 'src/app/components/beer-card/beer-card.component';



@NgModule({
  declarations: [
    DateCardComponent,
    BeerCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    DateCardComponent,
    BeerCardComponent
  ]
})
export class CardModule { }
