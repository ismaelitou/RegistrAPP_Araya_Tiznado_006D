import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarTareaPage } from './actualizar-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarTareaPageRoutingModule {}
