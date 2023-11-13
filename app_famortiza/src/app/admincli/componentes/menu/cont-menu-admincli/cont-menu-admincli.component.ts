import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cont-menu-admincli',
  templateUrl: './cont-menu-admincli.component.html',
  styleUrls: ['./cont-menu-admincli.component.css']
})
export class ContMenuAdmincliComponent {

  seleccionado: boolean = false
  contraerSelected: boolean = false
  listaMenu: any[] = []
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  llenarListaMenu() {
    this.listaMenu = [
      
      { 'Id': 1, 'Nombre': 'Datos Empresa', 'Logo': 'fa-solid fa-building-columns', 'Seleccionado': false, 'route': 'institucion' },
      { 'Id': 2, 'Nombre': 'Segmentos', 'Logo': 'fa-solid fa-business-time', 'Seleccionado': false, 'route': 'segmentos' },
      { 'Id': 3, 'Nombre': 'Tasas de Interes', 'Logo': 'fa-solid fa-percent', 'Seleccionado': false, 'route': 'tasas' },
      { 'Id': 4, 'Nombre': 'Cargos Indirectos', 'Logo': 'fa-solid fa-file-invoice-dollar', 'Seleccionado': false, 'route': 'cargos' }]
  }


  seleccionar(a: any) {
    this.listaMenu.forEach(i => i.Seleccionado = false)
    a.Seleccionado = !a.Seleccionado

  }
  contraer() {
    this.contraerSelected = !this.contraerSelected
    this.onClick.emit(this.contraerSelected);
  }
  ngOnInit() {
    this.llenarListaMenu()
  }
}
