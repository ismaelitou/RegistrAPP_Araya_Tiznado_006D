import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router, private toastcontroller: ToastController) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authservice.IsLoggedIn()) {
      this.showToast('Debe iniciar sesión para acceder a esta página.');
      this.router.navigateByUrl("/login");
      return false;
    }

    const usuarioActual = this.authservice.GetUserRole();

    if (route.data['tipoUsuario'] && route.data['tipoUsuario'] !== usuarioActual) {
      this.showToast('No tiene permiso para acceder a esta página.');
      this.router.navigateByUrl("/inicio");
      return false;
    }

    return true;
  }

  async showToast(msg: string) {
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}