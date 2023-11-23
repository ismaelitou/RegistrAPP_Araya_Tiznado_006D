import { Component } from '@angular/core';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';
import { MenuController } from '@ionic/angular';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  usuario: { role: string | undefined } = { role: '' };
  constructor(
    private autorizadoGuard: AutorizadoGuard, 
    private router: Router, 
    private authService: AuthService,
    private menuController: MenuController) {}

    ngOnInit() {
      const role = sessionStorage.getItem('role');
      const inicioComponente = this.componentes.find(componente => componente.name === 'Inicio');
      if (role === 'docente' && inicioComponente) {
        inicioComponente.redirecTo = '/inicio';
      } else if (role === 'alumno' && inicioComponente) {
        inicioComponente.redirecTo = '/inicio-alumno';
      }
    }

  componentes : Componente[] = [
    {
      name:'Inicio',
      icon: 'home-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Tareas',
      icon: 'book-outline',
      redirecTo:'/tareas'
    },
    {
      name:'Información',
      icon: 'information-circle-outline',
      redirecTo:'/info'
    }
  ]
}