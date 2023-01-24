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
    { text: 'Home', routerLink: 'home' },
    { text: 'Clock', routerLink: 'clocks' },
    { text: 'AI Art', routerLink: 'ai-images' },
    { text: 'Styled components', routerLink: 'styled-components' },
  ];
}
