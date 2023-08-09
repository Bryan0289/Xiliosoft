import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { TableEmpleadoComponent } from './view/table-empleado/table-empleado.component';
import { FormEmpleadoComponent } from './view/form-empleado/form-empleado.component';


@NgModule({
  declarations: [
    TableEmpleadoComponent,
    FormEmpleadoComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule
  ]
})
export class EmpleadoModule { }
