import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioAlumnoPageRoutingModule } from './inicio-alumno-routing.module';
import { InicioAlumnoPage } from './inicio-alumno.page';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAlumnoPageRoutingModule,
    NgxScannerQrcodeModule
  ],
  declarations: [InicioAlumnoPage]
})
export class InicioAlumnoPageModule {}
