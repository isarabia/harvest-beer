import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirectBackComponent } from 'src/app/components/redirect-back/redirect-back.component';


@NgModule({
  declarations: [
    RedirectBackComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RedirectBackComponent
  ]
})

export class RedirectModule { }
