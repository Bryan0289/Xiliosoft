import { Component } from '@angular/core';
import { AsignacionService } from '../../services/asignacion.service';
import { asignacion } from 'src/app/models/asignacion.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styles: [
  ]
})
export class ResumenComponent {
  asignaciones: asignacion[];
  constructor(
    private asignacionService: AsignacionService
  ) {
    this.cargar();
  }
  ejecutar(asignacion: asignacion) {
    this.asignacionService.putAsignacion(asignacion.maquinaria.id, asignacion.id)
    .subscribe((res => {
      Swal.fire(
        'Ok!',
        'Se retorno Correctamente!',
        'success'
        )
        this.cargar();
      }), err => {
        console.log(err);
        
        Swal.fire('Error', err.error.msg, 'error')
    })

  }
  cargar(){
    this.asignacionService.getAsignaciones()
      .subscribe(asignaciones => this.asignaciones = asignaciones)
  }


}
