import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JunioPage } from './junio.page';

const routes: Routes = [
  {
    path: '',
    component: JunioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JunioPageRoutingModule {}
