import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EneroPage } from './enero.page';

const routes: Routes = [
  {
    path: '',
    component: EneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EneroPageRoutingModule {}
