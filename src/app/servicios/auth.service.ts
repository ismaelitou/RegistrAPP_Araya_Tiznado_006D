import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alumno, Docente, NuevoAlumno, NuevoDocente } from '../interfaces/usuarios';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) { }
  GetAllUsers():Observable<Alumno>{
    return this.httpClient.get<Alumno>(`${environment.apiUrl}/usuarios`);
  }
  GetAlumnoById(id:any):Observable<Alumno>{
    return this.httpClient.get<Alumno>(`${environment.apiUrl}/usuarios/?username=${id}`);
  }
  GetDocenteById(id:any):Observable<Docente>{
    return this.httpClient.get<Docente>(`${environment.apiUrl}/usuarios/?username=${id}`);
  }
  crearAlumno(newAlumno: NuevoAlumno): Observable<NuevoAlumno>{
    return this.httpClient.post<Alumno>(`${environment.apiUrl}/usuarios`, newAlumno)
  }
  actualizarAlumno(alumno: Alumno): Observable<Alumno> {
    return this.httpClient.put<Alumno>(`${environment.apiUrl}/usuarios/${alumno.id}`, alumno);
  }
  crearDocente(newDocente: NuevoDocente): Observable<NuevoDocente>{
    return this.httpClient.post<Docente>(`${environment.apiUrl}/usuarios`, newDocente)
  }
  GetUserRole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  LogOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('ingresado');
    sessionStorage.removeItem('id');
    this.router.navigateByUrl('/login');
  }
}