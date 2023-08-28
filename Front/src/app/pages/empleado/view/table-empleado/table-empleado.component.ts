import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { area } from 'src/app/models/area.model';
import { cargo } from 'src/app/models/cargo.model';
import { empleado } from 'src/app/models/empleado.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-empleado',
  templateUrl: './table-empleado.component.html',
  styles: [
  ]
})
export class TableEmpleadoComponent {
  public empleados!: empleado[];
  public areas!: area[];
  public cargos!: cargo[];

  constructor (private fb: FormBuilder,
    private router: Router,
    private EmpleadoService: EmpleadoService,
  ) {
    this.cargar();
    EmpleadoService.getArea()
    .subscribe(area => this.areas = area)
    EmpleadoService.getCargo()
    .subscribe(cargo => this.cargos = cargo)
  }
  cargar(){
    
    this.EmpleadoService.getEmpleados()
    .subscribe(empleados => this.empleados = empleados)    
    console.log(this.empleados);
      
  }
  editar(empleado:empleado){
    console.log(empleado);
    this.EmpleadoService.putEmpleado(empleado)
    .subscribe((res => {
      
      Swal.fire(
        'Ok!',
        'Se Edito Correctamente!',
        'success'
        )
        // this.router.navigateByUrl('/')
      }), err => {
        console.log(err);
        
        Swal.fire('Error', err.error.msg, 'error')
    })
    
    
  }
  eliminar(empleado:empleado){
    this.EmpleadoService.deleteEmpleado(empleado)
    .subscribe((res => {
      
      Swal.fire(
        'Ok!',
        'Se Elimino Correctamente!',
        'success'
        )
        this.cargar();
        // this.router.navigateByUrl('/')
      }), err => {
        Swal.fire('Error', err.error.msg, 'error')
    })
  }

}
