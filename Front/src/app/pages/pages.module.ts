import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { EmpleadoModule } from './empleado/empleado.module';
import { MaquinariaModule } from './maquinaria/maquinaria.module';
import { AsignacionComponent } from './asignacion/asignacion.component';
import { ResumenComponent } from './resumen/resumen.component';


@NgModule({
  declarations: [
    PagesComponent,
    AsignacionComponent,
    ResumenComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    EmpleadoModule,

    ReactiveFormsModule,
    FormsModule,
    MaquinariaModule,
  ],

})
export class PagesModule { }
