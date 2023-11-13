import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalAdmincliComponent } from './principal-admincli/principal-admincli.component';
import { DashboardAdmincliComponent } from './componentes/pages/dashboard-admincli/dashboard-admincli.component';
import { PagInstitucionAdmincliComponent } from './componentes/pages/institucion/pag-institucion-admincli/pag-institucion-admincli.component';
import { PagSegmentosAdmincliComponent } from './componentes/pages/segmentos/pag-segmentos-admincli/pag-segmentos-admincli.component';
import { TablaTasasAdmincliComponent } from './componentes/pages/tasas/tabla-tasas-admincli/tabla-tasas-admincli.component';
import { PagCargosAdmincliComponent } from './componentes/pages/cargos/pag-cargos-admincli/pag-cargos-admincli.component';
import { PagTasasAdmincliComponent } from './componentes/pages/tasas/pag-tasas-admincli/pag-tasas-admincli.component';

const routes: Routes = [
  {path:'',component:PrincipalAdmincliComponent,children:[
    {path:'', component:DashboardAdmincliComponent},
    {path:'institucion', component:PagInstitucionAdmincliComponent},
    {path:'segmentos',component:PagSegmentosAdmincliComponent},
    {path:'tasas',component:PagTasasAdmincliComponent},
    {path:'cargos', component:PagCargosAdmincliComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmincliRoutingModule { }
