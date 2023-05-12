import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FebreroPage } from './febrero.page';

const routes: Routes = [
  {
    path: '',
    component: FebreroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FebreroPageRoutingModule {}
