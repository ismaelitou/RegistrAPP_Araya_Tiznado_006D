import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { QR, NuevoQR } from 'src/app/interfaces/qr';
import { AlertController } from '@ionic/angular';
import { format } from 'date-fns';
import { toDataURL } from 'qrcode';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  qrData: string = '';

  username: string = '';
  role: string = '';
  asignatura: string = '';
  asignatura2: string = '';
  comentario: string = '';

  newQR: NuevoQR ={
    username:'',
    asignatura:'',
    fecha:'',
    comentario:''
  }

  nombre:any;

  constructor(
    private alert: AlertController, 
    private apiCrud: ApiCrudService, 
    private router: Router, 
    private menuController: MenuController
    ) { }

  ngOnInit() {
    const storedUsername = sessionStorage.getItem('username');
    const storedRole = sessionStorage.getItem('role');
    const storedAsignatura = sessionStorage.getItem('asignatura');
    const storedAsignatura2 = sessionStorage.getItem('asignatura2');
    if (storedUsername) {
      this.username = storedUsername;
    }
    if (storedRole) {
      this.role = storedRole.toUpperCase();
    }
    if (storedAsignatura) {
      this.asignatura = storedAsignatura;
    }
    if (storedAsignatura2) {
      this.asignatura2 = storedAsignatura2;
    }
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  generarQR(){
    this.newQR.username = this.username;
    this.newQR.asignatura = this.asignatura;
    const fechaActual = new Date();
    this.newQR.fecha = format(fechaActual, 'dd-MM-yyyy');
    this.newQR.comentario = this.comentario;
    this.apiCrud.crearQR(this.newQR).subscribe();
    const textoQR = `Profesor: ${this.newQR.username}\nAsignatura: ${this.newQR.asignatura}\nFecha: ${this.newQR.fecha}\nComentarios del docente: ${this.newQR.comentario}`;
    this.qrData = textoQR;
    this.comentario = '';
    this.mostrarMensaje();
    const canvas = document.createElement('canvas');

    toDataURL(this.qrData, (error: any, url: string) => {
      if (error) {
        console.error('Error al generar el QR:', error);
      } else {
        const asignaturaSinEspacios = this.newQR.asignatura.replace(/\s/g, '_');
        const fileName = `QR_${asignaturaSinEspacios}_${this.newQR.fecha}.png`;
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
      }
    });
  }

  async mostrarMensaje(){
    const alerta = await this.alert.create({
      header: 'QR creado con éxito!',
      message: 'Su QR ha sido almacenado.',
      buttons: ['OK']
    });
    alerta.present();
  }
}