import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroDocentePageRoutingModule } from './registro-docente-routing.module';
import { RegistroDocentePage } from './registro-docente.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDocentePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroDocentePage]
})
export class RegistroDocentePageModule {}
