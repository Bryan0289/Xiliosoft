import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquinariaRoutingModule } from './maquinaria-routing.module';
import { FormMaquinariaComponent } from './view/form-maquinaria/form-maquinaria.component';
import { TableMaquinariaComponent } from './view/table-maquinaria/table-maquinaria.component';


@NgModule({
  declarations: [
    FormMaquinariaComponent,
    TableMaquinariaComponent
  ],
  imports: [
    CommonModule,
    MaquinariaRoutingModule
  ]
})
export class MaquinariaModule { }
