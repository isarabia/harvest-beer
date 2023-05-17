import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBeerPage } from './add-beer.page';

const routes: Routes = [
  {
    path: '',
    component: AddBeerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBeerPageRoutingModule {}
