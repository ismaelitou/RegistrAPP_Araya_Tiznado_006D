import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata: any;

  usuario={
    id:0,
    username:"",
    password:"",
    role:"",
    asignatura:"",
    asignatura2:""
  }

  loginForm: FormGroup;

  constructor(private menuController: MenuController, private authservice: AuthService, private router: Router, private alertcontroller: AlertController, private toastcontroller: ToastController, private builder: FormBuilder) { 
                this.loginForm = this.builder.group({
                  'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
                  'password': new FormControl("", [Validators.required, Validators.minLength(4)])
                })
               }

  ngOnInit() {
  }

  Login() {
    if (this.loginForm.valid){
      this.authservice.GetAlumnoById(this.loginForm.value.username).subscribe(resp=>{ 
        this.userdata = resp;
        console.log(this.userdata);
        if (this.userdata.length>0){
          this.usuario = {
            id: this.userdata[0].id,
            username: this.userdata[0].username,
            password: this.userdata[0].password,
            role: this.userdata[0].role,
            asignatura: this.userdata[0].asignatura,
            asignatura2: this.userdata[0].asignatura2
          }
          if (this.usuario.password === this.loginForm.value.password){
            sessionStorage.setItem('id', this.usuario.id.toString());
            sessionStorage.setItem('username', this.usuario.username);
            sessionStorage.setItem('role', this.usuario.role);
            sessionStorage.setItem('ingresado', 'true');
            if (this.usuario.role === 'alumno') {
              this.router.navigateByUrl('/inicio-alumno');
            } else if (this.usuario.role === 'docente') {
              sessionStorage.setItem('asignatura', this.usuario.asignatura);
              sessionStorage.setItem('asignatura2', this.usuario.asignatura2);
              this.router.navigateByUrl('/inicio');
            }
            const mensaje = `Sesión iniciada. Bienvenido/a ${this.usuario.username}!`;
            this.showToast(mensaje);
          }
          else{
            this.ErrorDatos();
            this.loginForm.reset();
          }
        }
        else{
          this.NoExiste();
          this.loginForm.reset();
        }
      })
    }
  }

  async showToast(msg: any){
    const toast=await this.toastcontroller.create({
      message : msg,
      duration: 4000,
      color: 'success',
      mode: 'ios'
    });
    toast.present();
  }

  async ErrorDatos() {
    const alerta = await this.alertcontroller.create({
      header: 'Error!',
      message: 'Revise sus credenciales.',
      buttons: ['Ok']
    });
    await alerta.present();
    return;
  }

  async NoExiste(){
    const alerta = await this.alertcontroller.create({
      header : 'Error!',
      message: 'El usuario no existe.',
      buttons: ['Ok']
    })
    await alerta.present();
    return;
  }

  MostrarMenu(){
    this.menuController.open('first');
  }

}