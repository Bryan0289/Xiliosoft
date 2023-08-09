import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableEmpleadoComponent } from './view/table-empleado/table-empleado.component';
import { FormEmpleadoComponent } from './view/form-empleado/form-empleado.component';

const routes: Routes = [
  {path:'', component:TableEmpleadoComponent},
  {path:'form', component:FormEmpleadoComponent},
  {path:'**', redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
