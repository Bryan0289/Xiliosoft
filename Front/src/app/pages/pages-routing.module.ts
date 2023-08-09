import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumenComponent } from './resumen/resumen.component';
import { AsignacionComponent } from './asignacion/asignacion.component';

const routes: Routes = [

  {path:'empleado',loadChildren:()=>import('./empleado/empleado.module').then(m=>m.EmpleadoModule)},
  {path:'resumen',component:ResumenComponent},
  {path:'asignacion',component:AsignacionComponent},
  {path:'maquinaria',loadChildren:()=>import('./maquinaria/maquinaria.module').then(m=>m.MaquinariaModule)},
  {path:'**', redirectTo:'resumen'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
