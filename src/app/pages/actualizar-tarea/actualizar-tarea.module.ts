import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActualizarTareaPageRoutingModule } from './actualizar-tarea-routing.module';
import { ActualizarTareaPage } from './actualizar-tarea.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarTareaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ActualizarTareaPage]
})
export class ActualizarTareaPageModule {}
