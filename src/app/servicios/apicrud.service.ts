import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../interfaces/tareas';
import { NuevaTarea } from '../interfaces/nuevaTarea';
import { NuevoUsuario } from '../interfaces/nuevoUsuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {

  constructor(private httpclient:HttpClient) { }

  listarTareas():Observable<Tarea>{
    return this.httpclient.get<Tarea>(`${environment.apiUrl}/tareas`);
  }

  crearTarea(newTarea: NuevaTarea): Observable<NuevaTarea>{
    return this.httpclient.post<Tarea>(`${environment.apiUrl}/tareas`, newTarea);
  }

  eliminarTarea (tarea:any): Observable<Tarea>{
    return this.httpclient.delete<Tarea>(`${environment.apiUrl}/tareas/${tarea.id}`)
  }

  actualizarTarea(tarea:any):Observable<Tarea>{
    return this.httpclient.put<Tarea>(`${environment.apiUrl}/tareas/${tarea.id}`, tarea);
  }
  
  BuscarTareaId(id:number):Observable<Tarea>{
    return this.httpclient.get<Tarea>(`${environment.apiUrl}/tareas/?id=${id}`);
  }

  crearUsuario(newUsuario: NuevoUsuario): Observable<NuevoUsuario>{
    return this.httpclient.post<NuevoUsuario>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

}
