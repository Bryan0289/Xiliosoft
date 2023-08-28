import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResAsignacion, ResAsignaciones } from '../interfaces/Asignacion';
import { asignacion } from '../models/asignacion.model';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  private _baseUrl: string = environment.baseUrl


  constructor(private http: HttpClient) {

  }
  getAsignaciones() {
    return this.http.get<ResAsignaciones>(`${this._baseUrl}asignacion`)
      .pipe(
        map(res => {
          
          return res.asignaciones
        })
      )
  }
  postAsignacion(empleadoId:string, maquinariaId:string) {
    return this.http.post<ResAsignacion>(`${this._baseUrl}asignacion`, {empleadoId,maquinariaId})
      .pipe(
        map(res => {
          return res.asignacion
        })
      )
  }
  putAsignacion(maquinariaId:string,asignacionId:string) {
    return this.http.put<ResAsignacion>(`${this._baseUrl}asignacion`,{maquinariaId,asignacionId})
      .pipe(
        map(res => {
          
          return res.asignacion
        })
      )
  }
}
