import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovemberPage } from './november.page';

const routes: Routes = [
  {
    path: '',
    component: NovemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovemberPageRoutingModule {}
