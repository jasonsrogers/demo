import { Component } from '@angular/core';
import { Item } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-app';

  menuItems: Item[] = [
    { text: 'Home', routerLink: 'home-page' },
    { text: 'Clocks', routerLink: 'clocks-page' },
    { text: 'AI generated', routerLink: 'ai-page' },
    { text: 'Styled components', routerLink: 'styled-components-page' },
    { text: 'Hexagon', routerLink: 'hexagon-page' },
  ];
}
