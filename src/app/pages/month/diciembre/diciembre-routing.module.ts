import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiciembrePage } from './diciembre.page';

const routes: Routes = [
  {
    path: '',
    component: DiciembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiciembrePageRoutingModule {}
