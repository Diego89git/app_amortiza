import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalAdminComponent } from './principal-admin/principal-admin.component';
import { PagRolesAdminComponent } from './componentes/pages/roles/pag-roles-admin/pag-roles-admin.component';
import { PagInstitucionesAdminComponent } from './componentes/pages/instituciones/pag-instituciones-admin/pag-instituciones-admin.component';
import { PagUsuariosAdminComponent } from './componentes/pages/usuarios/pag-usuarios-admin/pag-usuarios-admin.component';
import { PagSegmentosAdminComponent } from './componentes/pages/segmentos/pag-segmentos-admin/pag-segmentos-admin.component';
import { PagTasasAdminComponent } from './componentes/pages/tasas/pag-tasas-admin/pag-tasas-admin.component';
import { PagCargosAdminComponent } from './componentes/pages/cargos/pag-cargos-admin/pag-cargos-admin.component';

const routes: Routes = [
  {path:'',component:PrincipalAdminComponent, children:[
    {path:'roles', component:PagRolesAdminComponent},
    {path:'instituciones',component:PagInstitucionesAdminComponent},
    {path:'usuarios',component:PagUsuariosAdminComponent},
    {path:'segmentos',component:PagSegmentosAdminComponent},
    {path:'tasas',component:PagTasasAdminComponent},
    {path:'cargos',component:PagCargosAdminComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
