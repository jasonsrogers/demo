import { Component, Input } from '@angular/core';

export type Item = {
  text: string;
  routerLink: string;
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() items: Item[] = [];
}
