import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoTareaPageRoutingModule } from './info-tarea-routing.module';

import { InfoTareaPage } from './info-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoTareaPageRoutingModule
  ],
  declarations: [InfoTareaPage]
})
export class InfoTareaPageModule {}
