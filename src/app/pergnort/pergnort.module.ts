import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PergnortPageRoutingModule } from './pergnort-routing.module';

import { PergnortPage } from './pergnort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PergnortPageRoutingModule
  ],
  declarations: [PergnortPage]
})
export class PergnortPageModule {}
