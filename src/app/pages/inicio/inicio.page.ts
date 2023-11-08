import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public mensaje:string;
  
  data={
    texto:''
  }

  nombre:any;

  constructor(private router: Router, private menuController: MenuController) {
    this.mensaje='hola mundo';
    this.nombre=sessionStorage.getItem('username');
  }

  ngOnInit() {
  }

  LogOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('ingresado');

    this.router.navigateByUrl('/login');
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  generarQr(){
    this.mensaje = this.data.texto;
  }
}
