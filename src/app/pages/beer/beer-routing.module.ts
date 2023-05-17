import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerPage } from './beer.page';

const routes: Routes = [
  {
    path: '',
    component: BeerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeerPageRoutingModule {}
