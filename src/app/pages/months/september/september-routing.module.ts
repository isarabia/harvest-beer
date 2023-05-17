import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeptemberPage } from './september.page';

const routes: Routes = [
  {
    path: '',
    component: SeptemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeptemberPageRoutingModule {}
