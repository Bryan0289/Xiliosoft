import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableMaquinariaComponent } from './view/table-maquinaria/table-maquinaria.component';
import { FormMaquinariaComponent } from './view/form-maquinaria/form-maquinaria.component';

const routes: Routes = [
  {path:'', component:TableMaquinariaComponent},
  {path:'form', component:FormMaquinariaComponent},
  {path:'**', redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaquinariaRoutingModule { }
