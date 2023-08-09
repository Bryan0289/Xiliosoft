import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumenServicesService {
  
  private baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) {

  }
  getResumen() {
    return this.http.get<Resumen>(`${this.baseUrl}category`)
      .pipe(
        map(res => {
          return res.categories
        })
      )
  }
}
