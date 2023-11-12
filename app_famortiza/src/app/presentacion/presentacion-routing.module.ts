import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPresentacionComponent } from './principal-presentacion/principal-presentacion.component';
import { HomePresentacionComponent } from './pages/home-presentacion/home-presentacion.component';
import { SisPresentacionComponent } from './pages/sis-presentacion/sis-presentacion.component';
import { ContactPresentacionComponent } from './pages/contact-presentacion/contact-presentacion.component';
import { AccesoPresentacionComponent } from './pages/acceso-presentacion/acceso-presentacion.component';
import { InfoSisPresComponent } from './pages/sis-presentacion/componentes/info-sis-pres/info-sis-pres.component';
import { ProcesoSisPresComponent } from './pages/sis-presentacion/componentes/proceso-sis-pres/proceso-sis-pres.component';

const routes: Routes = [
  {path:'',component:PrincipalPresentacionComponent, children:[
    {path:'',component:HomePresentacionComponent},
    {path:'home',component:HomePresentacionComponent},
    {path:'sistema',component:SisPresentacionComponent, children:[
      {path:'',component:InfoSisPresComponent},
      {path:'info',component:InfoSisPresComponent},
      {path:'simular', component:ProcesoSisPresComponent}
    ]},
    {path:'contacto',component:ContactPresentacionComponent},
    {path:'acceso',component: AccesoPresentacionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentacionRoutingModule { }
