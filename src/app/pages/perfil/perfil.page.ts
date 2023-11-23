import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any;

  username: string = '';
  role: string = '';
  asignatura: string = '';
  asignatura2: string = '';

  constructor(private toastcontroller: ToastController, private Router: Router, private menuController: MenuController, private ApiCrud: ApiCrudService, private authService: AuthService) {
    this.usuario = {
      role: ''
    };
   }

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

  async showToast(msg: any){
    const toast=await this.toastcontroller.create({
      message : msg,
      duration: 4000,
      color: 'danger',
      mode: 'ios'
    });
    toast.present();
  }

  getInicioUrl(): string {
    const role = sessionStorage.getItem('role');
    if (role === 'alumno') {
      return '/inicio-alumno';
    } else if (role === 'docente') {
      return '/inicio';
    } else {
      const mensaje = "Error. Porfavor inicie sesión de nuevo.";
      this.showToast(mensaje);
      this.LogOut();
      return '/login';
    }
  }

  getEditarUrl(): string {
    const role = sessionStorage.getItem('role');
    if (role === 'alumno') {
      return '/editar-alumno';
    } else if (role === 'docente') {
      return '/editar-docente';
    } else {
      const mensaje = "Error. Porfavor inicie sesión de nuevo.";
      this.showToast(mensaje);
      this.LogOut();
      return '/login';
    }
  }

  ionViewWillEnter(){
    this.usuario.role = this.authService.GetUserRole();
  }

  LogOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('ingresado');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('asignatura');
    sessionStorage.removeItem('asignatura2');
    this.Router.navigateByUrl('/login');
    const mensaje = "Sesión cerrada.";
    this.showToast(mensaje);
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

}
