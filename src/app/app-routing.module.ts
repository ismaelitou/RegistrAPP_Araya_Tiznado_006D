import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
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
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./pages/tareas/tareas.module').then( m => m.TareasPageModule)
  },
  {
    path: 'agregar-tareas',
    loadChildren: () => import('./pages/agregar-tareas/agregar-tareas.module').then( m => m.AgregarTareasPageModule)
  },
  {
    path: 'info-tarea/:id',
    loadChildren: () => import('./pages/info-tarea/info-tarea.module').then( m => m.InfoTareaPageModule)
  },
  {
    path: 'actualizar-tarea/:id',
    loadChildren: () => import('./pages/actualizar-tarea/actualizar-tarea.module').then( m => m.ActualizarTareaPageModule)
  },
  {
    path: 'eliminar-tarea/:id',
    loadChildren: () => import('./pages/eliminar-tarea/eliminar-tarea.module').then( m => m.EliminarTareaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
