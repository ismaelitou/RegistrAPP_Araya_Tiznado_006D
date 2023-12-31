import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarAlumnoPageRoutingModule } from './editar-alumno-routing.module';
import { EditarAlumnoPage } from './editar-alumno.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAlumnoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarAlumnoPage]
})
export class EditarAlumnoPageModule {}
