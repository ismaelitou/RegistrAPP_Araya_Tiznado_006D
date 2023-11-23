import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutorizadoGuard } from './guards/autorizado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AutorizadoGuard],
    data: { tipoUsuario: 'docente' }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then( m => m.TareasPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'agregar-tareas',
    loadChildren: () => import('./pages/agregar-tareas/agregar-tareas.module').then( m => m.AgregarTareasPageModule),
    canActivate: [AutorizadoGuard],
    data: { tipoUsuario: 'docente' }
  },
  {
    path: 'info-tarea/:id',
    loadChildren: () => import('./pages/info-tarea/info-tarea.module').then( m => m.InfoTareaPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'actualizar-tarea/:id',
    loadChildren: () => import('./pages/actualizar-tarea/actualizar-tarea.module').then( m => m.ActualizarTareaPageModule),
    canActivate: [AutorizadoGuard],
    data: { tipoUsuario: 'docente' }
  },
  {
    path: 'eliminar-tarea/:id',
    loadChildren: () => import('./pages/eliminar-tarea/eliminar-tarea.module').then( m => m.EliminarTareaPageModule),
    canActivate: [AutorizadoGuard],
    data: { tipoUsuario: 'docente' }
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AutorizadoGuard]
  },
  {
    path: 'registro-docente',
    loadChildren: () => import('./pages/registro-docente/registro-docente.module').then( m => m.RegistroDocentePageModule)
  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./pages/inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule),
    canActivate: [AutorizadoGuard],
    data: { tipoUsuario: 'alumno' }
  },
  {
    path: 'editar-alumno',
    loadChildren: () => import('./pages/editar-alumno/editar-alumno.module').then( m => m.EditarAlumnoPageModule)
  },
  {
    path: 'editar-docente',
    loadChildren: () => import('./pages/editar-docente/editar-docente.module').then( m => m.EditarDocentePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }