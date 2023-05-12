import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JulioPage } from './julio.page';

const routes: Routes = [
  {
    path: '',
    component: JulioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JulioPageRoutingModule {}
