import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-admincli',
  templateUrl: './principal-admincli.component.html',
  styleUrls: ['./principal-admincli.component.css']
})
export class PrincipalAdmincliComponent {
  contraerSelected: any;
  contraer(a: any) {
    this.contraerSelected = a
  }
}
