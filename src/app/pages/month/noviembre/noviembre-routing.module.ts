import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoviembrePage } from './noviembre.page';

const routes: Routes = [
  {
    path: '',
    component: NoviembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoviembrePageRoutingModule {}
