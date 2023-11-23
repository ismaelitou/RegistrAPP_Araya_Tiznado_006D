import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.page.html',
  styleUrls: ['./editar-docente.page.scss'],
})
export class EditarDocentePage implements OnInit {

  editarForm: FormGroup;

  constructor(
    private authservice: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastController: ToastController
  ) { 
    this.editarForm = this.formBuilder.group({
      'username': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'password': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'asignatura': new FormControl("", [Validators.required]),
      'asignatura2': new FormControl("", [Validators.required])
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
