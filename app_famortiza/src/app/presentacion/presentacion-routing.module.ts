import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPresentacionComponent } from './principal-presentacion/principal-presentacion.component';
import { HomePresentacionComponent } from './pages/home-presentacion/home-presentacion.component';
import { SisPresentacionComponent } from './pages/sis-presentacion/sis-presentacion.component';
import { ContactPresentacionComponent } from './pages/contact-presentacion/contact-presentacion.component';
import { AccesoPresentacionComponent } from './pages/acceso-presentacion/acceso-presentacion.component';

const routes: Routes = [
  {path:'',component:PrincipalPresentacionComponent, children:[
    {path:'',component:HomePresentacionComponent},
    {path:'home',component:HomePresentacionComponent},
    {path:'sistema',component:SisPresentacionComponent},
    {path:'contacto',component:ContactPresentacionComponent},
    {path:'acceso',component: AccesoPresentacionComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentacionRoutingModule { }
