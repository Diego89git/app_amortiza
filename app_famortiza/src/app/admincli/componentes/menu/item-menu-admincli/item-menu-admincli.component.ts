import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-menu-admincli',
  templateUrl: './item-menu-admincli.component.html',
  styleUrls: ['./item-menu-admincli.component.css']
})
export class ItemMenuAdmincliComponent {
  @Input() data: any
  @Input() contraer: any
}
