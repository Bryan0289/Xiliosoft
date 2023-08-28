import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { area } from 'src/app/models/area.model';
import { cargo } from 'src/app/models/cargo.model';
import { EmpleadoService } from '../../../../services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styles: [
  ]
})
export class FormEmpleadoComponent {
  public areas!: area[];
  public cargos!: cargo[];
  public empleadoForm = this.fb.group({
    nombre: ["", [Validators.required]],
    cedula: ["", [Validators.required]],
    area: ["0", [Validators.required, Validators.minLength(2)]],
    cargo: ["0", [Validators.required, Validators.minLength(2)]]
  })
  constructor(private fb: FormBuilder,
    private router: Router,
    private EmpleadoService: EmpleadoService
  ) {
    EmpleadoService.getArea()
      .subscribe(area => this.areas = area)
      EmpleadoService.getCargo()
      .subscribe(cargo => this.cargos = cargo)

  }
  validar(campo: string) {
    return this.empleadoForm.controls[campo].errors && this.empleadoForm.controls[campo].touched
  }

  guardar() {
    if (this.empleadoForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Formulario no completado',
      })

    } else {
      const {
        nombre,
        cedula,
        area,
        cargo,
      } = this.empleadoForm.value
      
         
      this.EmpleadoService.postEmpleado(nombre,cedula, area,cargo)
      .subscribe((res => {
        console.log(res);
        
        Swal.fire(
          'Ok!',
          'Se Creo Correctamente!',
          'success'
          )
          // this.router.navigateByUrl('/')
        }), err => {
          console.log(err);
          Swal.fire('Error', err.error.msg, 'error')
      })

    }

  }



}
