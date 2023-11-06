import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentacionRoutingModule } from './presentacion-routing.module';
import { PrincipalPresentacionComponent } from './principal-presentacion/principal-presentacion.component';
import { CabPresentacionComponent } from './componentes/cab-presentacion/cab-presentacion.component';
import { PiePresentacionComponent } from './componentes/pie-presentacion/pie-presentacion.component';
import { MenuPresentacionComponent } from './componentes/menu-presentacion/menu-presentacion.component';
import { HomePresentacionComponent } from './pages/home-presentacion/home-presentacion.component';
import { ContactPresentacionComponent } from './pages/contact-presentacion/contact-presentacion.component';
import { AccesoPresentacionComponent } from './pages/acceso-presentacion/acceso-presentacion.component';
import { SisPresentacionComponent } from './pages/sis-presentacion/sis-presentacion.component';
import { MenuItemPresentacionComponent } from './componentes/menu-item-presentacion/menu-item-presentacion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrincipalPresentacionComponent,
    CabPresentacionComponent,
    PiePresentacionComponent,
    MenuPresentacionComponent,
    HomePresentacionComponent,
    ContactPresentacionComponent,
    AccesoPresentacionComponent,
    SisPresentacionComponent,
    MenuItemPresentacionComponent
  ],
  imports: [
    CommonModule,
    PresentacionRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    PrincipalPresentacionComponent,
    CabPresentacionComponent,
    PiePresentacionComponent,
    MenuPresentacionComponent,
    HomePresentacionComponent,
    ContactPresentacionComponent,
    AccesoPresentacionComponent,
    SisPresentacionComponent,
    MenuItemPresentacionComponent
  ]
})
export class PresentacionModule { }
