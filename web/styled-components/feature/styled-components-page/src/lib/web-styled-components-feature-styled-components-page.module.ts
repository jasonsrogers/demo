import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@demo-app/shared/ui';
import { StyledComponentsPageComponent } from './styled-components-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    RouterModule.forChild([
      {
        path: '',
        component: StyledComponentsPageComponent,
      },
    ]),
  ],
  declarations: [StyledComponentsPageComponent],
})
export class WebStyledComponentsFeatureStyledComponentsPageModule {}
