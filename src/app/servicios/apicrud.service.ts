import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea, NuevaTarea } from '../interfaces/tareas';
import { environment } from 'src/environments/environment';
import { NuevoQR, QR } from '../interfaces/qr';
import { Asistencia, NuevaAsistencia } from '../interfaces/qr';
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
  crearQR(newQR: NuevoQR): Observable<NuevoQR>{
    return this.httpclient.post<QR>(`${environment.apiUrl}/qr`, newQR);
  }
  crearAsistencia(newAsistencia: NuevaAsistencia): Observable<NuevaAsistencia>{
    return this.httpclient.post<Asistencia>(`${environment.apiUrl}/asistencias`, newAsistencia);
  }
}