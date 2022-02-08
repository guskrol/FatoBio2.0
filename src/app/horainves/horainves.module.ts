import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorainvesPageRoutingModule } from './horainves-routing.module';

import { HorainvesPage } from './horainves.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorainvesPageRoutingModule
  ],
  declarations: [HorainvesPage]
})
export class HorainvesPageModule {}
