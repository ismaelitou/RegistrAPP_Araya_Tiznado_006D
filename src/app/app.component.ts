import { Component } from '@angular/core';
import { AutorizadoGuard } from './guards/autorizado.guard';
import { Router } from '@angular/router';
import { AuthService } from './servicios/auth.service';

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
  constructor(private autorizadoGuard: AutorizadoGuard, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.usuario.role = this.authService.GetUserRole();
  }

  componentes : Componente[] = [
    {
      name:'Inicio',
      icon: 'home-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Información',
      icon: 'information-circle-outline',
      redirecTo:'/info'
    },
    {
      name:'Tareas',
      icon: 'book-outline',
      redirecTo:'/tareas'
    }
  ]

}
