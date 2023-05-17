import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from 'src/app/components/add-button/add-button.component';


@NgModule({
  declarations: [
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AddButtonComponent
  ]
})

export class ButtonModule { }
