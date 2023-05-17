import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecemberPage } from './december.page';

const routes: Routes = [
  {
    path: '',
    component: DecemberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DecemberPageRoutingModule {}
