import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OmsNewPage } from './oms-new.page';

const routes: Routes = [
  {
    path: '',
    component: OmsNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OmsNewPageRoutingModule {}
