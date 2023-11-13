import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmincliRoutingModule } from './admincli-routing.module';
import { PrincipalAdmincliComponent } from './principal-admincli/principal-admincli.component';
import { CabAdmincliComponent } from './componentes/pagina/cab-admincli/cab-admincli.component';
import { ContenidoAdmincliComponent } from './componentes/pagina/contenido-admincli/contenido-admincli.component';
import { PieAdmincliComponent } from './componentes/pagina/pie-admincli/pie-admincli.component';
import { ContMenuAdmincliComponent } from './componentes/menu/cont-menu-admincli/cont-menu-admincli.component';
import { ItemMenuAdmincliComponent } from './componentes/menu/item-menu-admincli/item-menu-admincli.component';
import { PagInstitucionAdmincliComponent } from './componentes/pages/institucion/pag-institucion-admincli/pag-institucion-admincli.component';
import { PagSegmentosAdmincliComponent } from './componentes/pages/segmentos/pag-segmentos-admincli/pag-segmentos-admincli.component';
import { TablaSegmentosAdmincliComponent } from './componentes/pages/segmentos/tabla-segmentos-admincli/tabla-segmentos-admincli.component';
import { FormSegmentosAdmincliComponent } from './componentes/pages/segmentos/form-segmentos-admincli/form-segmentos-admincli.component';
import { PagTasasAdmincliComponent } from './componentes/pages/tasas/pag-tasas-admincli/pag-tasas-admincli.component';
import { TablaTasasAdmincliComponent } from './componentes/pages/tasas/tabla-tasas-admincli/tabla-tasas-admincli.component';
import { FormTasasAdmincliComponent } from './componentes/pages/tasas/form-tasas-admincli/form-tasas-admincli.component';
import { PagCargosAdmincliComponent } from './componentes/pages/cargos/pag-cargos-admincli/pag-cargos-admincli.component';
import { TablaCargosAdmincliComponent } from './componentes/pages/cargos/tabla-cargos-admincli/tabla-cargos-admincli.component';
import { FormCargosAdmincliComponent } from './componentes/pages/cargos/form-cargos-admincli/form-cargos-admincli.component';
import { TasasCargosAdmincliComponent } from './componentes/pages/cargos/tasas-cargos-admincli/tasas-cargos-admincli.component';
import { DashboardAdmincliComponent } from './componentes/pages/dashboard-admincli/dashboard-admincli.component';
import { PresentacionModule } from '../presentacion/presentacion.module';
import { AppModule } from '../app.module';
import { CardDashboardAdmincliComponent } from './componentes/pages/dashboard-admincli/card-dashboard-admincli/card-dashboard-admincli.component';

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
    PrincipalAdmincliComponent,
    CabAdmincliComponent,
    ContenidoAdmincliComponent,
    PieAdmincliComponent,
    ContMenuAdmincliComponent,
    ItemMenuAdmincliComponent,
    PagInstitucionAdmincliComponent,
    PagSegmentosAdmincliComponent,
    TablaSegmentosAdmincliComponent,
    FormSegmentosAdmincliComponent,
    PagTasasAdmincliComponent,
    TablaTasasAdmincliComponent,
    FormTasasAdmincliComponent,
    PagCargosAdmincliComponent,
    TablaCargosAdmincliComponent,
    FormCargosAdmincliComponent,
    TasasCargosAdmincliComponent,
    DashboardAdmincliComponent,
    CardDashboardAdmincliComponent
    
  ],
  imports: [
    CommonModule,
    AdmincliRoutingModule,
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
    DividerModule,
    ReactiveFormsModule
  ]
})
export class AdmincliModule { }
