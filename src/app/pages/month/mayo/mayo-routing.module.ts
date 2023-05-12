import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MayoPage } from './mayo.page';

const routes: Routes = [
  {
    path: '',
    component: MayoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MayoPageRoutingModule {}
