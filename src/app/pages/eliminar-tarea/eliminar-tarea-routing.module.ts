import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarTareaPage } from './eliminar-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarTareaPageRoutingModule {}
