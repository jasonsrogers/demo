import { Route } from '@angular/router';

export const webShellRoutes: Route[] = [
  {
    path: 'home-page',
    loadChildren: async () =>
      (await import('@demo-app/web/home/feature/home-page'))
        .WebHomeFeatureHomePageModule,
  },
  {
    path: 'about-page',
    loadChildren: async () =>
      (await import('@demo-app/web/about/feature/about-page'))
        .WebAboutFeatureAboutPageModule,
  },
  {
    path: 'clocks-page',
    loadChildren: async () =>
      (await import('@demo-app/web/clocks/feature/clocks-page'))
        .WebClocksFeatureClocksPageModule,
  },
  {
    path: 'styled-components-page',
    loadChildren: async () =>
      (
        await import(
          '@demo-app/web/styled-components/feature/styled-components-page'
        )
      ).WebStyledComponentsFeatureStyledComponentsPageModule,
  },
  {
    path: 'hexagon-page',
    loadChildren: async () =>
      (await import('@demo-app/web/hexagon/feature/hexagon-page'))
        .WebHexagonFeatureHexagonPageModule,
  },
  {
    path: 'ai-page',
    loadChildren: async () =>
      (await import('@demo-app/web/ai/feature/ai-page'))
        .WebAiFeatureAiPageModule,
  },
  { path: '**', redirectTo: 'home-page' },
];
