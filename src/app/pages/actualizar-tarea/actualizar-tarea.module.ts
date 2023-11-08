import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarTareaPageRoutingModule } from './actualizar-tarea-routing.module';

import { ActualizarTareaPage } from './actualizar-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarTareaPageRoutingModule
  ],
  declarations: [ActualizarTareaPage]
})
export class ActualizarTareaPageModule {}
