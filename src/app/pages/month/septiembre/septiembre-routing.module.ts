import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeptiembrePage } from './septiembre.page';

const routes: Routes = [
  {
    path: '',
    component: SeptiembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeptiembrePageRoutingModule {}
