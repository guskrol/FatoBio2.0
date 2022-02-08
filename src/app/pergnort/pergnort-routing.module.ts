import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PergnortPage } from './pergnort.page';

const routes: Routes = [
  {
    path: '',
    component: PergnortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PergnortPageRoutingModule {}
