import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-presentacion',
  templateUrl: './menu-presentacion.component.html',
  styleUrls: ['./menu-presentacion.component.css']
})
export class MenuPresentacionComponent {
listaMenu:any[]=[]
ngOnInit(){
  this.listaMenu=[
    {icono:'fa..',titulo:'Home',ruta:'home',seleccionado:''},
    {icono:'fa..',titulo:'Tablas de Amortizacion',ruta:'sistema',seleccionado:''},
    {icono:'fa..',titulo:'Contacto',ruta:'contacto',seleccionado:''},
    {icono:'fa..',titulo:'Acceso',ruta:'acceso',seleccionado:''}
  ]
}
}
