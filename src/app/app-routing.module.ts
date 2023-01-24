import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiImagesComponent } from './ai-images/ai-images.component';
import { ClocksComponent } from './clocks/clocks.component';
import { HomeComponent } from './home/home.component';
import { StyledComponentsComponent } from './styled-components/styled-components.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clocks', component: ClocksComponent },
  { path: 'ai-images', component: AiImagesComponent },
  { path: 'styled-components', component: StyledComponentsComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
