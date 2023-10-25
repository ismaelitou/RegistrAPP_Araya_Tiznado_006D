import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-tarea',
  templateUrl: './actualizar-tarea.page.html',
  styleUrls: ['./actualizar-tarea.page.scss'],
})
export class ActualizarTareaPage implements OnInit {

  tarea = {
    id: 0,
    titulo: "",
    descripcion: "",
    estudianteAsignado: "",
    obligatoria: false
  }

  constructor(private ApiCrud: ApiCrudService, private Router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getTareaById(this.getIdFromUrl());
  }

  getIdFromUrl(){
    let url = this.Router.url;
    let arr = url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }

  getTareaById(TareaId:number){
    this.ApiCrud.BuscarTareaId(TareaId).subscribe(
      (resp:any) =>{
        this.tarea = {
          id: resp[0].id,
          titulo: resp[0].titulo,
          descripcion: resp[0].descripcion,
          estudianteAsignado: resp[0].estudianteAsignado,
          obligatoria: resp[0].obligatoria
        }
      }
    )
  }

  updateTarea(){
    this.ApiCrud.actualizarTarea(this.tarea).subscribe();
    this.Router.navigateByUrl("/tareas")
  }

}
