import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { AboutPageComponent } from './about-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: AboutPageComponent,
      },
    ]),
  ],
  declarations: [AboutPageComponent],
})
export class WebAboutFeatureAboutPageModule {}