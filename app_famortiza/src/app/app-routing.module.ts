import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./presentacion/presentacion-routing.module').then((m)=>m.PresentacionRoutingModule)},
  {path:'presentacion',loadChildren:()=>import('./presentacion/presentacion-routing.module').then((m)=>m.PresentacionRoutingModule)},
  {path:'admin',loadChildren:()=>import('./admin/admin-routing.module').then((m)=>m.AdminRoutingModule)},
  {path:'admincli',loadChildren:()=>import('./admincli/admincli-routing.module').then((m)=>m.AdmincliRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
