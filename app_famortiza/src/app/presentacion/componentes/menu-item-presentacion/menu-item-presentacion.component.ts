import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item-presentacion',
  templateUrl: './menu-item-presentacion.component.html',
  styleUrls: ['./menu-item-presentacion.component.css']
})
export class MenuItemPresentacionComponent {
@Input() item:any
}
