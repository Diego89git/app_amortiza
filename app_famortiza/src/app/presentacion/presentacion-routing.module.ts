import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalPresentacionComponent } from './principal-presentacion/principal-presentacion.component';

const routes: Routes = [
  {path:'',component:PrincipalPresentacionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentacionRoutingModule { }
