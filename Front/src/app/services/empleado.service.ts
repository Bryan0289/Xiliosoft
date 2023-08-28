import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResAreas, ResCargos, ResEmpleado, ResEmpleados } from '../interfaces/Empleados';
import { empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private _baseUrl: string = environment.baseUrl


  constructor(private http: HttpClient) {

  }
  getArea() {
    return this.http.get<ResAreas>(`${this._baseUrl}area`)
      .pipe(
        map(res => {
          return res.areas
        })
      )
  }
  getCargo() {
    return this.http.get<ResCargos>(`${this._baseUrl}cargo`)
      .pipe(
        map(res => {
          return res.cargos
        })
      )
  }
  getEmpleados() {
    return this.http.get<ResEmpleados>(`${this._baseUrl}empleado`)
      .pipe(
        map(res => {
          return res.empleados
        })
      )
  }
  postEmpleado(nombre:string,cedula:string,cargoId:string,areaId:string) {

    return this.http.post<ResEmpleado>(`${this._baseUrl}empleado`, {
      nombre,
      cedula,
      cargoId,
      areaId
    })
      .pipe(
        map(res => {
          console.log(res);
          
          return res.empleado
        })
      )
  }
  putEmpleado(e:empleado) {
    return this.http.put<ResEmpleado>(`${this._baseUrl}empleado/${e.id}`, e)
      .pipe(
        map(res => {
          return res.empleado
        })
      )
  }
  deleteEmpleado(e:empleado) {
    return this.http.delete<ResEmpleado>(`${this._baseUrl}empleado/${e.id}`)
      .pipe(
        map(res => {
          return res.empleado
        })
      )
  }
  
}
