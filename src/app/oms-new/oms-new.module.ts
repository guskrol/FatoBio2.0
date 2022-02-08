import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OmsNewPageRoutingModule } from './oms-new-routing.module';

import { OmsNewPage } from './oms-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OmsNewPageRoutingModule
  ],
  declarations: [OmsNewPage]
})
export class OmsNewPageModule {}
