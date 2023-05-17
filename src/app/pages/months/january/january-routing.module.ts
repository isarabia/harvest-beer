import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JanuaryPage } from './january.page';

const routes: Routes = [
  {
    path: '',
    component: JanuaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JanuaryPageRoutingModule {}
