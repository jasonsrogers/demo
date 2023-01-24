import { Component, Input } from '@angular/core';

export type Item = {
  text: string;
  routerLink: string;
};

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
  @Input() item: Item;
}
