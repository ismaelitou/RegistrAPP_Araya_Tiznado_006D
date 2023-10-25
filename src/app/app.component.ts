import { Component } from '@angular/core';

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
  constructor() {}

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
    },
    {
      name:'Cerrar sesión',
      icon: 'log-out-outline',
      redirecTo:'/login'
    }
  ]

}
