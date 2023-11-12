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
import { InfoSisPresComponent } from './pages/sis-presentacion/componentes/info-sis-pres/info-sis-pres.component';
import { ProcesoSisPresComponent } from './pages/sis-presentacion/componentes/proceso-sis-pres/proceso-sis-pres.component';
import { CardinfoSisPresComponent } from './pages/sis-presentacion/componentes/cardinfo-sis-pres/cardinfo-sis-pres.component';
import { TablaSisPresComponent } from './pages/sis-presentacion/componentes/tabla-sis-pres/tabla-sis-pres.component';
//primeng
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
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
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { DividerModule } from 'primeng/divider';

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
    MenuItemPresentacionComponent,
    InfoSisPresComponent,
    ProcesoSisPresComponent,
    CardinfoSisPresComponent,
    TablaSisPresComponent
  ],
  imports: [
    CommonModule,
    PresentacionRoutingModule,
    ReactiveFormsModule,
    CardModule,
    ImageModule,
    ToastModule ,
    ToolbarModule ,
    ButtonModule ,
    RippleModule ,
    FileUploadModule ,
    TableModule ,
    InputTextModule ,
    DialogModule ,
    InputTextareaModule ,
    DropdownModule ,
    TagModule ,
    RadioButtonModule ,
    InputNumberModule ,
    ConfirmDialogModule ,
    FormsModule ,
    RatingModule ,
    BrowserAnimationsModule ,
    SharedModule ,
    ListboxModule ,
    DividerModule ,
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
    MenuItemPresentacionComponent,
    InfoSisPresComponent,
    ProcesoSisPresComponent,
    CardinfoSisPresComponent,
    TablaSisPresComponent
  ]
})
export class PresentacionModule { }
