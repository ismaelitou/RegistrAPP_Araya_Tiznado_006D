import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EditarDocentePageRoutingModule } from './editar-docente-routing.module';
import { EditarDocentePage } from './editar-docente.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarDocentePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditarDocentePage]
})
export class EditarDocentePageModule {}
