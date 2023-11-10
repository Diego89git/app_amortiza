import { Component } from '@angular/core';

@Component({
  selector: 'app-principal-admin',
  templateUrl: './principal-admin.component.html',
  styleUrls: ['./principal-admin.component.css']
})
export class PrincipalAdminComponent {
  contraerSelected: any;
  contraer(a: any) {
    this.contraerSelected = a
  }
}
