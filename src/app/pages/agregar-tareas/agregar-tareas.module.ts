import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarTareasPageRoutingModule } from './agregar-tareas-routing.module';

import { AgregarTareasPage } from './agregar-tareas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarTareasPageRoutingModule
  ],
  declarations: [AgregarTareasPage]
})
export class AgregarTareasPageModule {}
