import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OctubrePage } from './octubre.page';

const routes: Routes = [
  {
    path: '',
    component: OctubrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OctubrePageRoutingModule {}
