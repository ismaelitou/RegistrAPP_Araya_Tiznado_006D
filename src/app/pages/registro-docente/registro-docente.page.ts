import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';
import { NuevoDocente } from 'src/app/interfaces/usuarios';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.page.html',
  styleUrls: ['./registro-docente.page.scss'],
})

export class RegistroDocentePage implements OnInit {
  newDocente: NuevoDocente = {
    username: "",
    password: "",
    role: "",
    asignatura: "",
    asignatura2: ""
  }

  registroForm: FormGroup;

  userdata: any;

  constructor(private alertcontroller: AlertController, private toastController: ToastController, private authservice: AuthService, private formBuilder: FormBuilder, private menuController: MenuController, private ApiCrud: ApiCrudService, private router: Router) { 
    this.registroForm = this.formBuilder.group({
      'username': new FormControl(this.newDocente.username, [Validators.required, Validators.minLength(4)]),
      'password': new FormControl(this.newDocente.password, [Validators.required, Validators.minLength(4)]),
      'asignatura': new FormControl(this.newDocente.asignatura, [Validators.required]),
      'asignatura2': new FormControl(this.newDocente.asignatura2, [Validators.required])
    });
   }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

  crearDocente() {
    if (this.registroForm.valid){
      const formValues = this.registroForm.value;
      this.newDocente = {
        username: formValues.username,
        password: formValues.password,
        role: "docente",
        asignatura: formValues.asignatura,
        asignatura2: formValues.asignatura2
      };
      this.authservice.crearDocente(this.newDocente).subscribe(() => {
        this.registroForm.reset();
        this.router.navigateByUrl("/login");
        const mensaje = "Registro exitoso. Porfavor inicia sesión a continuación.";
        this.showToast(mensaje);
      });
    } else {
      this.datosIncorrectos();
    }
  }

  async showToast(msg: any){
    const toast=await this.toastController.create({
      message : msg,
      duration: 4000,
      color: 'success',
      mode: 'ios'
    });
    toast.present();
  }

  async datosIncorrectos(){
    const alerta = await this.alertcontroller.create({
      header : 'Error!',
      message: 'Revisa los requerimientos mínimos.',
      buttons: ['OK']
    })
    await alerta.present();
    return;
  }
}