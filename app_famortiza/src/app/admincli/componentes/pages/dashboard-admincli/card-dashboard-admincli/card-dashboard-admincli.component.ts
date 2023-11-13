import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dashboard-admincli',
  templateUrl: './card-dashboard-admincli.component.html',
  styleUrls: ['./card-dashboard-admincli.component.css']
})
export class CardDashboardAdmincliComponent {
  @Input() segmento:any
  items: any[] = [/* tu arreglo de elementos */];
  mostrarMas = false;
  
  
  toggleMostrarMas() {
    this.mostrarMas = !this.mostrarMas;
  }
}
