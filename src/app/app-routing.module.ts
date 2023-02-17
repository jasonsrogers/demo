import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClocksPageComponent } from './clocks-page/clocks-page.component';
import { HexagonPageComponent } from './hexagon-page/hexagon-page.component';
import { StyledComponentsPageComponent } from './styled-components-page/styled-components-page.component';

const routes: Routes = [
  {
    path: 'home-page',
    loadChildren: async () =>
      (await import('@demo-app/web/home/feature/home-page'))
        .WebHomeFeatureHomePageModule,
  },
  { path: 'clocks-page', component: ClocksPageComponent },
  {
    path: 'about-page',
    loadChildren: async () =>
      (await import('@demo-app/web/ai/feature/ai-page'))
        .WebAiFeatureAiPageModule,
  },
  { path: 'styled-components-page', component: StyledComponentsPageComponent },
  { path: 'hexagon-page', component: HexagonPageComponent },
  {
    path: 'about-page',
    loadChildren: async () =>
      (await import('@demo-app/web/about/feature/about-page'))
        .WebAboutFeatureAboutPageModule,
  },
  { path: '**', redirectTo: 'home-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
