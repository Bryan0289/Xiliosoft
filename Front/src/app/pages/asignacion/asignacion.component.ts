import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { empleado } from 'src/app/models/empleado.model';
import { maquinaria } from 'src/app/models/maquinaria.model';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MaquinaService } from '../../services/maquina.service';
import Swal from 'sweetalert2';
import { AsignacionService } from '../../services/asignacion.service';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styles: [
  ]
})
export class AsignacionComponent  {
  public maquinaria!: maquinaria[];
  public empleados!: empleado[];
  public asignacionForm = this.fb.group({
    maquinariaId: ["0", [Validators.required, Validators.minLength(1)]],
    empleadoId: ["0", [Validators.required, Validators.minLength(1)]],
   
  })
  constructor (private fb: FormBuilder,
    private router: Router,
    private EmpleadoService: EmpleadoService,
    private MaquinaService:MaquinaService,
    private AsignacionService:AsignacionService
  ) {
    EmpleadoService.getEmpleados()
      .subscribe(empleados => this.empleados = empleados)
    MaquinaService.getMaquinariaDisponible()
      .subscribe(maquinarias => this.maquinaria = maquinarias)
      
    
  }
  
  validar(campo: string) {
    return this.asignacionForm.controls[campo].errors && this.asignacionForm.controls[campo].touched
  }
  guardar(){
    if(this.asignacionForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Formulario incompleto',
      })
    }else{
      const {
        empleadoId,
        maquinariaId
      }=this.asignacionForm.value;
      this.AsignacionService.postAsignacion(empleadoId, maquinariaId)
      .subscribe((res => {
        
        
        Swal.fire(
          'Ok!',
          'Se Creo Correctamente!',
          'success'
          )
          // this.router.navigateByUrl('/')
        }), err => {
          Swal.fire('Error', err.error.msg, 'error')
      })
    }
    
  }
}
