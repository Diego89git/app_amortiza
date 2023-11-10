import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pag-compartido-cabecera',
  templateUrl: './pag-compartido-cabecera.component.html',
  styleUrls: ['./pag-compartido-cabecera.component.css']
})
export class PagCompartidoCabeceraComponent {
  @Input() data:any
}
