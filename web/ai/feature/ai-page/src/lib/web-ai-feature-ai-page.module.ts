import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AiPageComponent } from './ai-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AiPageComponent,
      },
    ]),
  ],
  declarations: [AiPageComponent],
})
export class WebAiFeatureAiPageModule {}
