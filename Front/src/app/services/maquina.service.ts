import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResAsignacion, ResAsignaciones } from '../interfaces/Asignacion';
import { maquinaria } from '../models/maquinaria.model';
import { ResMaquinaria, ResMaquinarias } from '../interfaces/Maquinaria';

@Injectable({
  providedIn: 'root'
})
export class MaquinaService {

  private _baseUrl: string = environment.baseUrl


  constructor(private http: HttpClient) {

  } 
  getMaquinarias() {
    return this.http.get<ResMaquinarias>(`${this._baseUrl}maquinaria`)
      .pipe(
        map(res => {
          return res.maquinarias
        })
      )
  }
  getMaquinariaDisponible() {
    return this.http.get<ResMaquinarias>(`${this._baseUrl}maquinaria/disponible`)
      .pipe(
        map(res => {
          console.log(res.maquinarias);
          
          return res.maquinarias
        })
      )
  }
  
  postMaquinaria(m:maquinaria) {
    return this.http.post<ResMaquinaria>(`${this._baseUrl}maquinaria`, m)
      .pipe(
        map(res => {
          return res.maquinaria
        })
      )
  }
  putMaquinaria(m:maquinaria) {
    return this.http.put<ResMaquinaria>(`${this._baseUrl}maquinaria/${m.id}`, m)
      .pipe(
        map(res => {
          return res.maquinaria
        })
      )
  }
  deleteMaquinaria(m:maquinaria) {
    return this.http.delete<ResMaquinaria>(`${this._baseUrl}maquinaria/${m.id}`)
      .pipe(
        map(res => {
          return res.maquinaria
        })
      )
  }
}
