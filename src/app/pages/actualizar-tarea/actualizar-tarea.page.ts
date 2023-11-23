import { Component, OnInit } from '@angular/core';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Tarea } from 'src/app/interfaces/tareas';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-tarea',
  templateUrl: './actualizar-tarea.page.html',
  styleUrls: ['./actualizar-tarea.page.scss'],
})
export class ActualizarTareaPage implements OnInit {

  tarea: Tarea = {
    id: 0,
    titulo: '',
    descripcion: '',
    estudianteAsignado: '',
    obligatoria: false
  };

  tareaForm: FormGroup;

  constructor(
    private ApiCrud: ApiCrudService, private Router: Router, 
    private formBuilder: FormBuilder, private toastcontroller: ToastController
    ) { 
      this.tareaForm = this.formBuilder.group({
        'titulo': new FormControl("", [Validators.required]),
        'descripcion': new FormControl("", [Validators.required]),
        'estudianteAsignado': new FormControl("", [Validators.required]),
        'obligatoria': new FormControl("", [Validators.required])
      });
    }

  ngOnInit() {
    this.getTarea();
  }

  getTarea() {
    const tareaId = this.getIdFromUrl();
    this.ApiCrud.BuscarTareaId(tareaId).subscribe((resp: any) => {
      this.tarea = {
        id: tareaId,
        titulo: resp[0].titulo,
        descripcion: resp[0].descripcion,
        estudianteAsignado: resp[0].estudianteAsignado,
        obligatoria: resp[0].obligatoria || false
      };
      this.tareaForm.patchValue({
        'titulo': resp[0].titulo,
        'descripcion': resp[0].descripcion,
        'estudianteAsignado': resp[0].estudianteAsignado,
        'obligatoria': resp[0].obligatoria || false
      });
    });
  }

  getIdFromUrl(){
    let url = this.Router.url;
    let arr = url.split("/",3);
    let id = parseInt(arr[2]);
    return id;
  }
  
  async showToast(msg: any){
    const toast=await this.toastcontroller.create({
      message : msg,
      duration: 3000,
      color: 'success',
      mode: 'ios'
    });
    toast.present();
  }

  updateTarea(){
    if (this.tareaForm.valid) {
      const tareaId = this.getIdFromUrl();
  
      const updatedTarea = {
        id: tareaId,
        titulo: this.tareaForm.get('titulo')?.value,
        descripcion: this.tareaForm.get('descripcion')?.value,
        estudianteAsignado: this.tareaForm.get('estudianteAsignado')?.value,
        obligatoria: this.tareaForm.get('obligatoria')?.value || false
      };
      this.ApiCrud.actualizarTarea(updatedTarea).subscribe(() => {
        this.Router.navigateByUrl('/tareas');
        const mensaje = `Tarea actualizada con éxito!`;
        this.showToast(mensaje);
      });
    }
  }
}