import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-menu-admin',
  templateUrl: './item-menu-admin.component.html',
  styleUrls: ['./item-menu-admin.component.css']
})
export class ItemMenuAdminComponent {
  @Input() data: any
  @Input() contraer: any
}
