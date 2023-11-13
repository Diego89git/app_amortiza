import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentacionModule } from './presentacion/presentacion.module';
import { AdminModule } from './admin/admin.module';
import { AdmincliModule } from './admincli/admincli.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PresentacionModule,
    AdminModule,
    AdmincliModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
