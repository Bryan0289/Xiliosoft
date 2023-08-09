import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { EmpleadoModule } from './empleado/empleado.module';
import { MaquinariaModule } from './maquinaria/maquinaria.module';


@NgModule({
  declarations: [
    PagesComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    EmpleadoModule,
    MaquinariaModule,
  ],

})
export class PagesModule { }
