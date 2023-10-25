import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  tarea = {
    id: 0,
    titulo: "",
    descripcion: "",
    estudianteAsignado: "",
    obligatoria: false
  }

  constructor(private ApiCrud: ApiCrudService, private Router: Router, private menuController: MenuController) { }

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

  MostrarMenu(){
    this.menuController.open('first');
  }

}
