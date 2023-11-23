import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { ToastController } from '@ionic/angular';
import { NuevaAsistencia } from 'src/app/interfaces/qr';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { scan } from 'rxjs';

@Component({
  selector: 'app-inicio-alumno',
  templateUrl: './inicio-alumno.page.html',
  styleUrls: ['./inicio-alumno.page.scss'],
})
export class InicioAlumnoPage implements OnInit {
  qrResultString: string = '';

  constructor(
    private menuController: MenuController, 
    private router: Router,
    private apiCrud: ApiCrudService, 
    private toastcontroller: ToastController,
    private alert: AlertController,
    private scanner: NgxScannerQrcodeModule
  ) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  handleQrCodeResult(resultString: string) {
    console.log('Result: ', resultString);
    this.qrResultString = resultString;
    this.saveToJSON();
  }

  saveToJSON() {
    let usuario = sessionStorage.getItem('username')!;
    let data: NuevaAsistencia = { 'username': usuario, 'info': this.qrResultString };
    this.apiCrud.crearAsistencia(data).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}

