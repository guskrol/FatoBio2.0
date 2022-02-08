import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorainvesPage } from './horainves.page';

const routes: Routes = [
  {
    path: '',
    component: HorainvesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorainvesPageRoutingModule {}
