import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NuevaTarea } from 'src/app/interfaces/nuevaTarea';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.page.html',
  styleUrls: ['./agregar-tareas.page.scss'],
})
export class AgregarTareasPage implements OnInit {

  newTarea: NuevaTarea = {
    titulo: "",
    descripcion: "",
    estudianteAsignado: "",
    obligatoria: false
  }

  constructor(private menuController: MenuController, private ApiCrud: ApiCrudService, private router: Router) { }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  crearTarea(){
    this.ApiCrud.crearTarea(this.newTarea).subscribe();
    this.router.navigateByUrl("/tareas");
  }
}