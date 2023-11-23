import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';
import { NuevoAlumno } from 'src/app/interfaces/usuarios';
import { ApiCrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage implements OnInit {
  newAlumno: NuevoAlumno = {
    username: "",
    password: "",
    role: ""
  }

  registroForm: FormGroup;

  userdata: any;

  constructor(
    private alertcontroller: AlertController, 
    private toastController: ToastController, 
    private authservice: AuthService, 
    private formBuilder: FormBuilder, 
    private menuController: MenuController, 
    private ApiCrud: ApiCrudService, 
    private router: Router) { 
    this.registroForm = this.formBuilder.group({
      'username': new FormControl(this.newAlumno.username, [Validators.required, Validators.minLength(4)]),
      'password': new FormControl(this.newAlumno.password, [Validators.required, Validators.minLength(4)])
    });
   }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }
  crearAlumno() {
    if (this.registroForm.valid){
      const formValues = this.registroForm.value;
      this.newAlumno = {
        username: formValues.username,
        password: formValues.password,
        role: "alumno"
      };
      this.authservice.crearAlumno(this.newAlumno).subscribe(() => {
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