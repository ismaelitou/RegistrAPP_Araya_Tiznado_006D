import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoTareaPage } from './info-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: InfoTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoTareaPageRoutingModule {}
