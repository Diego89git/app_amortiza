import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardinfo-sis-pres',
  templateUrl: './cardinfo-sis-pres.component.html',
  styleUrls: ['./cardinfo-sis-pres.component.css']
})
export class CardinfoSisPresComponent {
@Input() segmento:any
items: any[] = [/* tu arreglo de elementos */];
mostrarMas = false;


toggleMostrarMas() {
  this.mostrarMas = !this.mostrarMas;
}
}
