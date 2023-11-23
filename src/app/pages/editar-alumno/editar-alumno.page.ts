import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.page.html',
  styleUrls: ['./editar-alumno.page.scss'],
})
export class EditarAlumnoPage implements OnInit {

  editarForm: FormGroup;

  constructor(
    private authservice: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) { 
    this.editarForm = this.formBuilder.group({
      'username': new FormControl("", [Validators.required]),
      'password': new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {
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

  editarCredenciales(){
  }
}
