import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    MenuComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
