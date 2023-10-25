import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { LoadingController } from '@ionic/angular';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Tarea } from 'src/app/interfaces/tareas';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})
export class TareasPage {

  usuario: any;

  tareas: Tarea[] = [];

  constructor(private authService: AuthService, private tareasService: ApiCrudService, private menuController: MenuController, private loadingController: LoadingController) {
    this.usuario = {
      role: ''
    };
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  ionViewWillEnter() {
    this.usuario.role = this.authService.GetUserRole();
    this.loadTareas();
  }

  async loadTareas(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingController.create({
      message: "Cargando...",
      spinner: "bubbles"
    });
    await loading.present();

    this.tareasService.listarTareas().subscribe(
      {
        next: resp => {
          console.log(resp);
          loading.dismiss();
          let listString = JSON.stringify(resp)
          this.tareas = JSON.parse(listString)
          event?.target.complete();
          console.log(this.tareas)
        },
        error: err =>{
          console.log(err.error.message);
          loading.dismiss();
        }
      }
    )
  }
}