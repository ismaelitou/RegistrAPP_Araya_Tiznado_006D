import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarDocentePage } from './editar-docente.page';

const routes: Routes = [
  {
    path: '',
    component: EditarDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarDocentePageRoutingModule {}
