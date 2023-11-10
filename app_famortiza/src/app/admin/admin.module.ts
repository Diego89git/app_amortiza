import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PrincipalAdminComponent } from './principal-admin/principal-admin.component';
import { CabAdminComponent } from './componentes/pagina/cab-admin/cab-admin.component';
import { ContenidoAdminComponent } from './componentes/pagina/contenido-admin/contenido-admin.component';
import { PieAdminComponent } from './componentes/pagina/pie-admin/pie-admin.component';
import { ContMenuAdminComponent } from './componentes/menu/cont-menu-admin/cont-menu-admin.component';
import { ItemMenuAdminComponent } from './componentes/menu/item-menu-admin/item-menu-admin.component';
import { PagRolesAdminComponent } from './componentes/pages/roles/pag-roles-admin/pag-roles-admin.component';
import { TablaRolesAdminComponent } from './componentes/pages/roles/tabla-roles-admin/tabla-roles-admin.component';
import { FormRolesAdminComponent } from './componentes/pages/roles/form-roles-admin/form-roles-admin.component';
import { PagInstitucionesAdminComponent } from './componentes/pages/instituciones/pag-instituciones-admin/pag-instituciones-admin.component';
import { TablaInstitucionesAdminComponent } from './componentes/pages/instituciones/tabla-instituciones-admin/tabla-instituciones-admin.component';
import { FormInstitucionesAdminComponent } from './componentes/pages/instituciones/form-instituciones-admin/form-instituciones-admin.component';
import { PagUsuariosAdminComponent } from './componentes/pages/usuarios/pag-usuarios-admin/pag-usuarios-admin.component';
import { TablaUsuariosAdminComponent } from './componentes/pages/usuarios/tabla-usuarios-admin/tabla-usuarios-admin.component';
import { FormUsuariosAdminComponent } from './componentes/pages/usuarios/form-usuarios-admin/form-usuarios-admin.component';
import { PagSegmentosAdminComponent } from './componentes/pages/segmentos/pag-segmentos-admin/pag-segmentos-admin.component';
import { TablaSegmentosAdminComponent } from './componentes/pages/segmentos/tabla-segmentos-admin/tabla-segmentos-admin.component';
import { FormSegmentosAdminComponent } from './componentes/pages/segmentos/form-segmentos-admin/form-segmentos-admin.component';
import { PagTasasAdminComponent } from './componentes/pages/tasas/pag-tasas-admin/pag-tasas-admin.component';
import { TablaTasasAdminComponent } from './componentes/pages/tasas/tabla-tasas-admin/tabla-tasas-admin.component';
import { FormTasasAdminComponent } from './componentes/pages/tasas/form-tasas-admin/form-tasas-admin.component';
import { PagCargosAdminComponent } from './componentes/pages/cargos/pag-cargos-admin/pag-cargos-admin.component';
import { TablaCargosAdminComponent } from './componentes/pages/cargos/tabla-cargos-admin/tabla-cargos-admin.component';
import { FormCargosAdminComponent } from './componentes/pages/cargos/form-cargos-admin/form-cargos-admin.component';
import { PagCompartidoCabeceraComponent } from './componentes/pages/compartido/pag-compartido-cabecera/pag-compartido-cabecera.component';

//elementos de prime ng
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { DividerModule } from 'primeng/divider';
//cierra primeng

@NgModule({
  declarations: [
    PrincipalAdminComponent,
    CabAdminComponent,
    ContenidoAdminComponent,
    PieAdminComponent,
    ContMenuAdminComponent,
    ItemMenuAdminComponent,
    PagRolesAdminComponent,
    TablaRolesAdminComponent,
    FormRolesAdminComponent,
    PagInstitucionesAdminComponent,
    TablaInstitucionesAdminComponent,
    FormInstitucionesAdminComponent,
    PagUsuariosAdminComponent,
    TablaUsuariosAdminComponent,
    FormUsuariosAdminComponent,
    PagSegmentosAdminComponent,
    TablaSegmentosAdminComponent,
    FormSegmentosAdminComponent,
    PagTasasAdminComponent,
    TablaTasasAdminComponent,
    FormTasasAdminComponent,
    PagCargosAdminComponent,
    TablaCargosAdminComponent,
    FormCargosAdminComponent,
    PagCompartidoCabeceraComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    FileUploadModule,
    TableModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule,
    TagModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    FormsModule,
    RatingModule,
    BrowserAnimationsModule,
    CardModule,
    SharedModule,
    ListboxModule,
    ReactiveFormsModule,
    DividerModule
  ],
  exports: [
    PrincipalAdminComponent,
    CabAdminComponent,
    ContenidoAdminComponent,
    PieAdminComponent,
    ContMenuAdminComponent,
    ItemMenuAdminComponent,
    PagRolesAdminComponent,
    TablaRolesAdminComponent,
    FormRolesAdminComponent,
    PagInstitucionesAdminComponent,
    TablaInstitucionesAdminComponent,
    FormInstitucionesAdminComponent,
    PagUsuariosAdminComponent,
    TablaUsuariosAdminComponent,
    FormUsuariosAdminComponent,
    PagSegmentosAdminComponent,
    TablaSegmentosAdminComponent,
    FormSegmentosAdminComponent,
    PagTasasAdminComponent,
    TablaTasasAdminComponent,
    FormTasasAdminComponent,
    PagCargosAdminComponent,
    TablaCargosAdminComponent,
    FormCargosAdminComponent,
    PagCompartidoCabeceraComponent
    
  ]
})
export class AdminModule { }
