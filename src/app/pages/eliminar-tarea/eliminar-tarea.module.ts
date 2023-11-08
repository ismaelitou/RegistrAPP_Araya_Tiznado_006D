import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarTareaPageRoutingModule } from './eliminar-tarea-routing.module';

import { EliminarTareaPage } from './eliminar-tarea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarTareaPageRoutingModule
  ],
  declarations: [EliminarTareaPage]
})
export class EliminarTareaPageModule {}