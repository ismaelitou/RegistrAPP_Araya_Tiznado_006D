import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NuevaTarea } from 'src/app/interfaces/nuevaTarea';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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

  tareaForm: FormGroup;

  constructor(private toastcontroller: ToastController, private menuController: MenuController, private alertcontroller: AlertController, private ApiCrud: ApiCrudService, private router: Router, private formBuilder: FormBuilder) {
    this.tareaForm = this.formBuilder.group({
      'titulo': new FormControl("", [Validators.required]),
      'descripcion': new FormControl("", [Validators.required]),
      'estudianteAsignado': new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
  }

  async showToast(msg: any){
    const toast=await this.toastcontroller.create({
      message : msg,
      duration: 3000
    });
    toast.present();
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  crearTarea(){
    if (this.tareaForm.valid){
      this.ApiCrud.crearTarea(this.newTarea).subscribe(() => {
        this.router.navigateByUrl("/inicio");
        const mensaje = `Tarea creada con exito! Vuelva a la lista de tareas para verla.`;
        this.showToast(mensaje);
      });
    }
  }
}