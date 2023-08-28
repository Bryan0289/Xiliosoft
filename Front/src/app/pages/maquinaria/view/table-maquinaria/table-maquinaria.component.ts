import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { maquinaria } from 'src/app/models/maquinaria.model';
import { MaquinaService } from 'src/app/services/maquina.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-maquinaria',
  templateUrl: './table-maquinaria.component.html',
  styles: [
  ]
})
export class TableMaquinariaComponent {
  public maquinarias!: maquinaria[];

  constructor (private fb: FormBuilder,
    private router: Router,
    private MaquinaService: MaquinaService,
  ) {
    this.cargar()
  }
  cargar(){
    
    this.MaquinaService.getMaquinarias()
    .subscribe(maquinarias => this.maquinarias = maquinarias)    
      
  }
  guardar(m:maquinaria){
    this.MaquinaService.putMaquinaria(m)
    .subscribe((res => {
      
      Swal.fire(
        'Ok!',
        'Se Edito Correctamente!',
        'success'
        )
        // this.router.navigateByUrl('/')
      }), err => {
        Swal.fire('Error', err.error.msg, 'error')
    })
    
  }
  eliminar(m:maquinaria){
    this.MaquinaService.deleteMaquinaria(m)
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
