import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FebruaryPage } from './february.page';

const routes: Routes = [
  {
    path: '',
    component: FebruaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FebruaryPageRoutingModule {}
