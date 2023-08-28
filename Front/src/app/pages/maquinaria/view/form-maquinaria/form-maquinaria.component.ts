import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MaquinaService } from '../../../../services/maquina.service';

@Component({
  selector: 'app-form-maquinaria',
  templateUrl: './form-maquinaria.component.html',
  styles: [
  ]
})
export class FormMaquinariaComponent {

  public maquinariaForm = this.fb.group({
    serie: ["", [Validators.required]],
    descripcion: ["", [Validators.required]],
  })
  constructor(private fb: FormBuilder,
    private maquinaService:MaquinaService
  ){

  }

  validar(campo: string) {
    return this.maquinariaForm.controls[campo].errors && this.maquinariaForm.controls[campo].touched
  }

  guardar(){
    if(this.maquinariaForm.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Formulario vacio',
        text: 'Llene todo el formulario',
      })
    }else{
      const {
        serie,
        descripcion
      }=this.maquinariaForm.value;
      this.maquinaService.postMaquinaria({serie,descripcion})
      .subscribe((res => {
        
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
