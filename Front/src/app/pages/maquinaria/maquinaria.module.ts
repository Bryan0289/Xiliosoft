import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaquinariaRoutingModule } from './maquinaria-routing.module';
import { FormMaquinariaComponent } from './view/form-maquinaria/form-maquinaria.component';
import { TableMaquinariaComponent } from './view/table-maquinaria/table-maquinaria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormMaquinariaComponent,
    TableMaquinariaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaquinariaRoutingModule
  ]
})
export class MaquinariaModule { }
