import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiPageComponent } from './ai-page/ai-page.component';
import { ClocksPageComponent } from './clocks-page/clocks-page.component';
import { HexagonPageComponent } from './hexagon-page/hexagon-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StyledComponentsPageComponent } from './styled-components-page/styled-components-page.component';

const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'clocks-page', component: ClocksPageComponent },
  { path: 'ai-page', component: AiPageComponent },
  { path: 'styled-components-page', component: StyledComponentsPageComponent },
  { path: 'hexagon-page', component: HexagonPageComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
