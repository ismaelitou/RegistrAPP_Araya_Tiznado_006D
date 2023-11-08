import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarTareasPage } from './agregar-tareas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarTareasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarTareasPageRoutingModule {}
