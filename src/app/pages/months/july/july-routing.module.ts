import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JulyPage } from './july.page';

const routes: Routes = [
  {
    path: '',
    component: JulyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JulyPageRoutingModule {}
