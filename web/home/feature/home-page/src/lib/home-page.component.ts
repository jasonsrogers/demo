import { Component } from '@angular/core';

@Component({
  selector: 'demo-app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public markdownTop = `
    # My sandbox

    ## Under construction

    This is a demo/sandbox website with random things that I wanted to build or
    test or showcase

    It doesn't have much of a purpose for now

    ### Sections:
  `;

  public markdownBottom = `
    ## To do:

    - Fix breakpoint
    - Convert scss to tailwind
    - Adding Auth0
    - Code examples to show how it's done

    ## Tech stack:

    - Angular 15
    - tailwind css
    - Nx

    Note: don't have much time to spare for this, so it may take a while
  `;

  public navSections = [
    { routerLink: ['/', 'clocks-page'], label: 'Clocks' },
    { routerLink: ['/', 'ai-page'], label: 'AI generated' },
    {
      routerLink: ['/', 'styled-components-page'],
      label: 'Styled components',
    },
    // { routerLink: ['/', 'hexagon-page'], label: 'Hexagon' },
    { routerLink: ['/', 'about-page'], label: 'About' },
  ];
}
