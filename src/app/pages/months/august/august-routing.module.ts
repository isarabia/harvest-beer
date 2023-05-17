import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AugustPage } from './august.page';

const routes: Routes = [
  {
    path: '',
    component: AugustPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AugustPageRoutingModule {}
