import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AlertController, MenuController } from '@ionic/angular';
import { NuevoUsuario } from 'src/app/interfaces/nuevoUsuario';
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
  newUsuario: NuevoUsuario = {
    username: "",
    password: "",
    role: "",
    isactive: true
  }

  registroForm: FormGroup;

  userdata: any;

  constructor(private alertcontroller: AlertController, private toastController: ToastController, private authservice: AuthService, private formBuilder: FormBuilder, private menuController: MenuController, private ApiCrud: ApiCrudService, private router: Router) { 
              this.registroForm = this.formBuilder.group({
                'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
                'password': new FormControl("", [Validators.required, Validators.minLength(4)])
              });
   }

  ngOnInit() {
  }

  MostrarMenu(){
    this.menuController.open('first');
  }
  crearUsuario() {
    this.ApiCrud.crearUsuario(this.newUsuario).subscribe();
    this.router.navigateByUrl("/login");
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