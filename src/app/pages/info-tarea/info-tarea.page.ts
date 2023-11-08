import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-info-tarea',
  templateUrl: './info-tarea.page.html',
  styleUrls: ['./info-tarea.page.scss'],
})
export class InfoTareaPage implements OnInit {

  usuario: any;

  tarea = {
    id: 0,
    titulo: "",
    descripcion: "",
    estudianteAsignado: "",
    obligatoria: false
  }

  constructor(private authService: AuthService, private ApiCrud: ApiCrudService, private Router: Router, private menuController: MenuController) { 
    this.usuario = {
      role: ''
    };
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.usuario.role = this.authService.GetUserRole();
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
